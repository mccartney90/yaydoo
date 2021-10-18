"use strict";
import UserQuery from "../queries/UserQuery";

module.exports = {
   up: async (queryInterface, Sequelize) => {
      const userQuery = new UserQuery();
      const users = await userQuery.findAll();
      const allIds = users.map((x) => x.id);
      const newData = [];
      for (let i = 1; i <= 100; i++) {
         const seedData = {
            role_id: i == 1 ? "1" : "2",
            user_id: allIds[i - 1],
            created_at: new Date(),
         };
         newData.push(seedData);
      }
      return queryInterface.bulkInsert("user_role", newData);
   },

   down: async (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("user_role", null, {});
   },
};
