"use strict";
import Sequelize from "sequelize";
import UserInformationModel from "../models/UserInformationModel";
import sequelize from "./../../config/connection_db";
import QueryGeneric from "./QueryGeneric";
const Op = Sequelize.Op;

export default class UserInformationQuery extends QueryGeneric {
   constructor() {
      const userInfdoModel = UserInformationModel(sequelize);
      super(userInfdoModel);

      this.userInfdoModel = userInfdoModel;
   }

   async findOneByPhoneNumber(phoneNumber) {
      return await this.userInfdoModel.findOne({
         where: {
            phone: {
               [Op.eq]: String(phoneNumber),
            },
         },
      });
   }

   async findOrCreateById(data) {
      return await this.userInfdoModel.findOrCreate({
         where: { user_id: data.user_id },
         defaults: data,
      });
   }

   async findByUserId(user_id) {
      return await this.userInfdoModel.findOne({
         where: {
            user_id: {
               [Op.eq]: user_id,
            },
         },
      });
   }

   createOrUpdate(values, condition) {
      return this.userInfdoModel.findOne({ where: condition }).then((obj) => {
         // update
         if (obj) return obj.update(values);
         // insert
         return this.userInfdoModel.create(values);
      });
   }
   async updateInfo(values, condition) {
      const find = await this.userInfdoModel.findOne({ where: condition });
      if (!find) {
         return false;
      }
      return await find.update(values);
   }
   async findOneById(data, attributes = false) {
      return this.userInfdoModel.findOne({
         attributes,
         where: {
            id: data,
         },
      });
   }
}
