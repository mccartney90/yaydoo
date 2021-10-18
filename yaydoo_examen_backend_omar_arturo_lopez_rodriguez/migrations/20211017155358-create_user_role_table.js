"use strict";
module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("user_role", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
               model: "users",
               key: "id",
            },
         },
         role_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
               model: "roles",
               key: "id",
            },
         },

         created_at: {
            type: Sequelize.DATE,
            allowNull: false,
         },
         deleted_at: {
            type: Sequelize.DATE,
            allowNull: true,
         },
      });
   },
   down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable("user_role");
   },
};
