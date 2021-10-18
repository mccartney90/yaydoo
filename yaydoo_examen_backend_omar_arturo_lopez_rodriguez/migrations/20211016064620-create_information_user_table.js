"use strict";
module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("user_informations", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },

         address: {
            type: Sequelize.STRING(100),
            allowNull: true,
         },
         phone: {
            type: Sequelize.STRING(100),
            allowNull: true,
         },
         birthdate: {
            allowNull: true,
            type: Sequelize.DATE,
         },
         user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
               model: "users",
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
      return queryInterface.dropTable("user_informations");
   },
};
