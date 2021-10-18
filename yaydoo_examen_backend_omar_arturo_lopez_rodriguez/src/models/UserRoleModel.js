"use strict";
import dotenv from "dotenv";
import Sequelize from "sequelize";
import RoleModel from "./RoleModel";
import UserModel from "./UserModel";
dotenv.config();

module.exports = (sequelize) => {
   const UserRoleModel = sequelize.define(
      "user_role",
      {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },

         user_id: {
            allowNull: false,
            type: Sequelize.INTEGER,
            field: "user_id",

            references: {
               model: UserModel,
               key: "id",
            },
         },
         role_id: {
            allowNull: false,
            type: Sequelize.INTEGER,
            field: "role_id",

            references: {
               model: RoleModel,
               key: "id",
            },
         },
         created_at: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW,
         },
         deleted_at: {
            type: Sequelize.DATE,
            allowNull: true,
         },
      },

      {
         underscored: true,
         timestamps: false,
         modelName: "UserInfo",
         freezeTableName: true,
         tableName: "user_role",
         scopes: {
            notDeleted: {
               where: {
                  deleted_at: null,
               },
            },
         },
      }
   );

   return UserRoleModel;
};
