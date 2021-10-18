"use strict";
import faker from "faker";
import crypt from "../middleware/crypt";
module.exports = {
   up: async (queryInterface, Sequelize) => {
      let pin = "12345678";
      var newData = [
         {
            name: `yaydoo`,
            email: "yaydoo@yaydoo.com",
            password: await crypt.hash(pin),
            created_at: new Date(),
         },
      ];
      for (let i = 0; i < 100; i++) {
         const seedData = {
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            email: `${faker.internet.email()}`.toLowerCase(),
            password: await crypt.hash(pin),
            created_at: new Date(),
         };
         newData.push(seedData);
      }
      return queryInterface.bulkInsert("users", newData);
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("users", null, {});
   },
};
