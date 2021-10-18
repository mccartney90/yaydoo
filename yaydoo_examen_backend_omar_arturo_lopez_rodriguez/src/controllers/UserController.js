"use strict";
import dotenv from "dotenv";
import { calcularEdad } from "../helpers/DatesHelper";
import UserInformationsQ from "../queries/UserInformationsQuery";
import UserQ from "../queries/UserQuery";
import UserRoleQ from "../queries/UserRoleQuery";
import crypt from "./../middleware/crypt";

dotenv.config();

module.exports = class UserController {
   static async listUsers(req, res, next) {
      try {
         const User = new UserQ();

         const listUsers = JSON.parse(
            JSON.stringify(
               await User.findAll({
                  order: [["id", "DESC"]],
               })
            )
         );
         // const countUser = await User.count();
         const allUserInf = [];
         for (const user of listUsers) {
            const infoQ = new UserInformationsQ();
            const inf = JSON.parse(JSON.stringify(await infoQ.findByUserId(user.id)));
            const rolesQ = new UserRoleQ();
            const roles = JSON.parse(JSON.stringify(await rolesQ.findRolesUser(user.id)));

            allUserInf.push({
               ...user,
               information: inf,
               roles: roles,
               age: calcularEdad(inf.birthdate),
            });
         }

         return res.status(200).send({ message: "success!!", allUserInf });
      } catch (err) {
         next(err);
      }
   }
   static async create(req, res, next) {
      try {
         const { user } = req.body;
         const userQ = new UserQ();
         const userInformationsQ = new UserInformationsQ();
         if (!user) {
            return res.status(400).send({ message: "user required" });
         }
         const hash = await crypt.hash(user.password);
         user.password = hash;

         const result = await userQ.create(user);
         if (!result) {
            return res.status(400).send({ message: "Error insert user" });
         }

         let userDB = {
            ...user,
            information: {
               ...user.information,
               user_id: result.id,
            },
         };
         const info = await userInformationsQ.create(userDB.information);
         if (!info) {
            return res.status(400).send({ message: "Error insert informations" });
         }
         userDB = { ...userDB, information: JSON.parse(JSON.stringify(info)) };

         return res.status(200).send({ message: "success!!", user: userDB });
      } catch (err) {
         next(err);
      }
   }
   static async viewUser(req, res, next) {
      try {
         const { user_id } = req.query;
         const userQuery = new UserQ();
         let user = await userQuery.findOneById(user_id);
         if (!user) {
            return res.status(400).send({});
         }
         user = JSON.parse(JSON.stringify(user));
         const infoQ = new UserInformationsQ();
         const inf = await infoQ.findByUserId(user.id);

         user = {
            ...user,
            information: inf,
            age: calcularEdad(inf.birthdate),
         };

         return res.status(200).send({ message: "success!!", user: JSON.parse(JSON.stringify(user)) });
      } catch (err) {
         next(err);
      }
   }

   static async updateUser(req, res, next) {
      try {
         const { user } = req.body;
         if (!user) {
            return res.status(400).send({ message: "user required" });
         }
         console.log(user);
         const userQ = new UserQ();
         const userInformationsQ = new UserInformationsQ();
         const userRoleQ = new UserRoleQ();
         const result = await userQ.updateUser(user, { id: user.id });

         if (!result) {
            return res.status(400).send({ message: "Error update user" });
         }

         let userDB = {
            ...user,
            information: {
               ...user.information,
               user_id: result.id,
            },
         };
         const info = await userInformationsQ.createOrUpdate(userDB.information, {
            user_id: user.id,
         });
         if (!info) {
            return res.status(400).send({ message: "Error update informations" });
         }
         userDB = { ...userDB, information: JSON.parse(JSON.stringify(info)) };

         return res.status(200).send({ message: "success!!", user: userDB });
      } catch (err) {
         next(err);
      }
   }

   static async deleteUser(req, res, next) {
      try {
         const { user_id } = req.query;
         console.log(user_id);
         const userQuery = new UserQ();
         const userInformationsQ = new UserInformationsQ();
         const userRoleQ = new UserRoleQ();
         const user = await userQuery.findOne({ where: { id: user_id } });
         if (!user) {
            return res.status(400).send({ message: "user not found" });
         }
         const userInfo = await userInformationsQ.findByUserId(user_id);
         if (userInfo) userInfo.destroy();

         const roleUsers = await userRoleQ.findAll({ where: { user_id: user_id } });
         console.log(roleUsers);
         for (const roleUser of roleUsers) {
            if (roleUser) roleUser.destroy();
         }
         user.destroy();

         return res.status(200).send({ message: "success!!", user: userMysql });
      } catch (err) {
         next(err);
      }
   }
};
