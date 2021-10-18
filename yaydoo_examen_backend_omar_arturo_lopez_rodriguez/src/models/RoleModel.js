"use strict";
import dotenv from "dotenv";
import Sequelize from "sequelize";
dotenv.config();

module.exports = (sequelize) => {
   const RoleModel = sequelize.define(
      "roles",
      {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         role: {
            type: Sequelize.STRING(100),
            allowNull: false,
            defaultValue: "user",
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
         modelName: "roles",
         freezeTableName: true,
         tableName: "roles",
         scopes: {
            notDeleted: {
               where: {
                  deleted_at: null,
               },
            },
         },
      }
   );

   return RoleModel;
};
