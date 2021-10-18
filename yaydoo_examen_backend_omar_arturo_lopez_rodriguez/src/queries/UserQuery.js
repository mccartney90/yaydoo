"use strict";
import Sequelize from "sequelize";
import RoleModel from "../models/RoleModel";
import UserModel from "../models/UserModel";
import UserRoleModel from "../models/UserRoleModel";
import sequelize from "./../../config/connection_db";
import QueryGeneric from "./QueryGeneric";
const Op = Sequelize.Op;

export default class UserQuery extends QueryGeneric {
   constructor() {
      const userModel = UserModel(sequelize);
      const userRoleModel = UserRoleModel(sequelize);
      const roleModel = RoleModel(sequelize);
      super(userModel);

      this.userModel = userModel;
      this.userRoleModel = userRoleModel;
      this.roleModel = roleModel;
   }

   async findOneByPhoneNumber(phoneNumber) {
      return await this.userModel.findOne({
         where: {
            phone_number: {
               [Op.eq]: String(phoneNumber),
            },
         },
      });
   }

   async findOrCreateByUid(data) {
      return await this.userModel.findOrCreate({
         where: { registry_uuid: data.registry_uuid },
         defaults: data,
      });
   }

   async createOrUpdate(values, condition) {
      const find = await this.userModel.findOne({ where: condition });
      if (find) return await find.update(values);
      // insert
      return await this.userModel.create(values);
   }
   async updateUser(values, condition) {
      const find = await this.userModel.findOne({ where: condition });
      if (!find) {
         return false;
      }
      return await find.update(values);
   }
   async findOneById(data, attributes = false) {
      const userRolesId = await this.userRoleModel.findAll({
         where: { user_id: data },
      });
      const roles = [];
      if (userRolesId) {
         for (const role of userRolesId) {
            const dataRole = await this.roleModel.findOne({ where: { id: role.role_id } });
            roles.push(JSON.parse(JSON.stringify(dataRole)));
         }
      }

      let user = JSON.parse(
         JSON.stringify(
            await this.userModel.findOne({
               attributes,
               where: {
                  id: data,
               },
            })
         )
      );
      user = {
         ...user,
         roles,
      };
      return user;
   }

   async authenticate(credentials) {
      const email = String(credentials.email);
      const password = String(credentials.password);

      const user = await this.userModel.findOne({
         where: {
            email: {
               [Op.eq]: email,
            },
         },
      });

      if (!user) {
         return false;
      }

      const result = await user.comparePassword(password);

      if (!result) {
         return false;
      }

      return user;
   }
}
