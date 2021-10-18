"use strict";
import Sequelize from "sequelize";
import RoleModel from "../models/RoleModel";
import UserRoleModel from "../models/UserRoleModel";
import sequelize from "./../../config/connection_db";
import QueryGeneric from "./QueryGeneric";

const Op = Sequelize.Op;

export default class UserRoleQuery extends QueryGeneric {
   constructor() {
      const userRoleModel = UserRoleModel(sequelize);
      const roleModel = RoleModel(sequelize);
      super(userRoleModel);

      this.userRoleModel = userRoleModel;
      this.roleModel = roleModel;
   }

   async findRolesUser(user_id) {
      const userRolesId = await this.userRoleModel.findAll({
         where: { user_id: user_id },
      });
      const roles = [];
      for (const role of userRolesId) {
         const dataRole = await this.roleModel.findOne({ where: { id: role.role_id } });
         roles.push(JSON.parse(JSON.stringify(dataRole)));
      }
      return roles;
   }
}
