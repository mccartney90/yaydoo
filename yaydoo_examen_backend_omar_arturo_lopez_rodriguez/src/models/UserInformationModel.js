"use strict";
import dotenv from "dotenv";
import Sequelize from "sequelize";
import UserModel from "./UserModel";
dotenv.config();

module.exports = (sequelize) => {
   const UserInformationModel = sequelize.define(
      "user_informations",
      {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },

         address: {
            type: Sequelize.STRING(100),
            allowNull: true,
            defaultValue: "",
         },
         phone: {
            type: Sequelize.STRING(100),
            allowNull: true,
            defaultValue: "",
         },
         birthdate: {
            allowNull: true,
            type: Sequelize.DATE,
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
         //  freezeTableName: true,
         //  tableName: 'user_informations',
         scopes: {
            notDeleted: {
               where: {
                  deleted_at: null,
               },
            },
         },
      }
   );
   // UserInformationModel.associate = function (models) {
   //    UserInformationModel.belongsTo(models.User, {
   //       foreignKey: "user_id",
   //       as: "user",
   //    });
   // };

   return UserInformationModel;
};

// module.exports = { User };
