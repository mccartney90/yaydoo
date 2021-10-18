"use strict";
import faker from "faker";
import UserQuery from "../queries/UserQuery";

const randomDate = (start, end) => {
   return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

module.exports = {
   up: async (queryInterface, Sequelize) => {
      const userQuery = new UserQuery();
      const users = await userQuery.findAll();
      const allIds = users.map((x) => x.id);

      var newData = [];
      for (let i = 1; i <= 100; i++) {
         const seedData = {
            address: `${faker.address.streetAddress()} ${faker.address.zipCode()}`,
            phone: faker.phone.phoneNumber(),
            birthdate: randomDate(new Date(2012, 0, 1), new Date()),
            user_id: allIds[i - 1],
            created_at: new Date(),
         };
         newData.push(seedData);
      }
      return queryInterface.bulkInsert("user_informations", newData);
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("user_informations", null, {});
   },
};
