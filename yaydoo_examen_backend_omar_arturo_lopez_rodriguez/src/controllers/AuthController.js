"use strict";
import dotenv from "dotenv";
import jwt from "../middleware/jwt";
import UserQ from "../queries/UserQuery";
dotenv.config();

module.exports = class AuthController {
   static async login(req, res, next) {
      try {
         const options = {
            maxAge: 900,
            httpOnly: true, // cookie is only accessible by the server
            //secure: true, // only transferred over https
            sameSite: true, // only sent for requests to the same FQDN as the domain in the cookie
         };

         const { email, password } = req.body;
         const User = new UserQ();
         let user = await User.authenticate({ email, password });
         if (!user) {
            return res.status(400).send({ message: "user not found" });
         }
         user = await User.findOneById(user.id);

         const payload = {
            registry: user.id,
            name: user.name,
            email: user.email,
            role: user.roles,
         };

         const token = await jwt.sign(payload, process.env.SECRET, {
            expiresIn: parseInt(process.env.JWT_EXPIRATION_TIME),
            issuer: process.env.JWT_ISSUER,
         });
         res.cookie("token", token, options);

         res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
         res.header("Access-Control-Allow-Credentials", true);

         return res.status(200).send({ message: "success!!", user: payload, token });
      } catch (err) {
         next(err);
      }
   }
};
