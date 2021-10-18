"use strict";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import Sequelize from "sequelize";
import jwt from "../middleware/jwt";
import crypt from "./../middleware/crypt";
dotenv.config();

module.exports = (sequelize) => {
   const UserModel = sequelize.define(
      "users",
      {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },

         name: {
            type: Sequelize.STRING(100),
            allowNull: false,
         },
         email: {
            type: Sequelize.STRING(100),
            allowNull: false,
         },
         password: {
            allowNull: true,
            type: Sequelize.STRING(255),
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
         sequelize,
         underscored: true,
         timestamps: false,
         modelName: "user",
         scopes: {
            notDeleted: {
               where: {
                  deleted_at: null,
               },
            },
         },
      }
   );

   UserModel.beforeCreate((user, options) =>
      crypt
         .hash(user.password)
         .then((hash) => {
            user.password = hash;
            return user;
         })
         .catch((err) => sequelize.Promise.reject(err))
   );

   UserModel.beforeUpdate(async (user) => {
      if (user.changed("password")) {
         const hash = await crypt.hash(user.password);

         user.password = hash;
      }
   });

   UserModel.prototype.comparePassword = async function comparePassword(password) {
      const result = await bcrypt.compareSync(password, this.password);

      return result;
   };

   UserModel.prototype.getJWT = function () {
      return jwt.sign({ id: this.user_id }, process.env.SECRET);
   };
   UserModel.associate = (models) => {
      UserModel.hasOne(models.UserInfo);
   };

   return UserModel;
};
