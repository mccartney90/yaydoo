"use strict";
module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("roles", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         role: {
            type: Sequelize.STRING(100),
            allowNull: true,
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
      return queryInterface.dropTable("roles");
   },
};
