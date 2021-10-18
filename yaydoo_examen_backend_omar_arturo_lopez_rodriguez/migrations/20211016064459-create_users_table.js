"use strict";
module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("users", {
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
         },
         deleted_at: {
            type: Sequelize.DATE,
            allowNull: true,
         },
      });
   },
   down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable("users");
   },
};
