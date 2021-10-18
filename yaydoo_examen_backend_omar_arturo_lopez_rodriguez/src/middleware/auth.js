"use strict";

import dotenv from "dotenv";
import UserQ from "../queries/UserQuery";
import headerCookie from "./header-cookie";
import jwt from "./jwt";
dotenv.config();

const isAuth = async (req, res, next) => {
   try {
      const token = await jwt.extractToken(req);

      const payload = await jwt.verify(token, process.env.SECRET);

      // req.extraData = payload;
      next();
   } catch (e) {
      next(e);
   }
};
const isAuthCookie = async (req, res, next) => {
   try {
      const { headers } = req;
      console.log(headers);
      let { hasToken, token, payload } = await headerCookie.getAuthCookie(headers.cookie, "token");
      if (hasToken) {
         const payload = await jwt.verify(token, process.env.SECRET);
         // req.extraData = payload;
      }

      next();
   } catch (e) {
      next(e);
   }
};
const isAdminCookie = async (req, res, next) => {
   try {
      const { headers } = req;
      console.log(headers);
      let { hasToken, token, payload } = await headerCookie.getAuthCookie(headers.cookie, "token");
      console.log(payload);
      if (hasToken) {
         if (payload.roles.indexOf("admin") !== -1) {
            const payload = await jwt.verify(token, process.env.SECRET);
            req.extraData = payload;
            next();
         }
      }

      next(new Error("You must have permissions admin"));
   } catch (e) {
      next(e);
   }
};

const isAdmin = async (req, res, next) => {
   try {
      const token = await jwt.extractToken(req);
      const payload = await jwt.verify(token, process.env.SECRET);

      const roles = payload.role.map((item) => item.role);
      if (roles.indexOf("admin") !== -1) {
         // req.extraData = payload;
         next();
      } else {
         next(new Error("You must have permissions admin"));
      }
   } catch (e) {
      console.log(e);
      next(e);
   }
};

const authenticate = async (req, res, next) => {
   try {
      const { email, password } = req.body;
      const userQuery = new UserQ();

      const user = await userQuery.authenticate({ email: email, password: password });

      if (!user) {
         return reject(new Error("Invalid user credentials"));
      }

      if (!result) {
         return res.status(400).send({
            code: "EA0038",
            userMessage: "E0031",
            message: "Pin user is wrong",
         });
      }

      next();
   } catch (e) {
      next(e);
   }
};

const validateApiKey = async (req, res, next) => {
   try {
      const { headers } = req;
      const apiKey = headers.apikey || "";
      if (apiKey === process.env.API_KEY_APP) {
         // console.log('auth');
      } else {
         throw new Error("You must have permissions");
      }
      next();
   } catch (e) {
      next(e);
   }
};

module.exports = {
   isAuth,
   authenticate,
   validateApiKey,
   isAdmin,
   isAuthCookie,
};
