"use strict";

module.exports = {
   up: async (queryInterface, Sequelize) => {
      const newData = [
         {
            role: `admin`,
            created_at: new Date(),
         },
         {
            role: `user`,
            created_at: new Date(),
         },
      ];
      return queryInterface.bulkInsert("roles", newData);
   },

   down: async (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("roles", null, {});
   },
};
