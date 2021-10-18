import dotenv from "dotenv";
import Sequelize from "sequelize";
import { database, dialect, host, password, username } from "./configDb";
dotenv.config();

const sequelize = new Sequelize(database, username, password, {
   host: host,
   dialect: dialect,
   pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
   define: {
      timestamps: true,
   },
   logging: false,
});

//User.sync({ force: false })

//test conection
try {
   sequelize
      .authenticate()
      .then(() => {
         console.log("Connection has been established successfully.");
      })
      .catch((err) => {
         console.error("Unable to connect to the database:", err);
      });
} catch (e) {
   console.log(e);
}

module.exports = sequelize;
