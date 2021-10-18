"use strict";

// const { logger } = require('../loggers/loggers')
import dotenv from "dotenv";
import { tokenExpired } from "../common/messages";
dotenv.config();
const handleError = (err, req, res, next) => {
   // logger.error(err)

   if (
      err.message.match(/invalid signature/) ||
      err.message.match(/No Authorization header/) ||
      err.message.match(/malformed/)
   ) {
      return res.status(401).send({
         code: "EA0002",
         userMessage: "E0010",
         message: "Not authenticated",
      });
   }

   if (err.message.match(/Invalid user credentials/)) {
      return res.status(400).send({
         code: "EA0038",
         userMessage: "E0031",
         message: "Pin user is wrong",
      });
   }

   if (err.message.includes("Unexpected number in JSON")) {
      return res.status(400).send({
         code: "EA0039",
         userMessage: "E0032",
         message: "Syntax Error JSON",
      });
   }

   if (err.message.includes("Invalid account")) {
      return res.status(400).send({
         code: "EA0037",
         userMessage: "E0027",
         message: "userUuid must be uuid string.",
      });
   }

   if (err.message.includes("invalid token")) {
      return res.status(500).send({
         code: "EA0041",
         userMessage: "E0034",
         message: "Invalid token",
      });
   }
   if (err.message.includes("You must have permissions admin")) {
      return res.status(500).send({
         code: "EA0044",
         userMessage: "E0036",
         message: "You must have permissions admin",
      });
   }
   if (err.message.includes("You must have permissions")) {
      return res.status(500).send({
         code: "EA0043",
         userMessage: "E0035",
         message: "You must have permissions api key invalid",
      });
   }

   if (err.message === "USER_NOT_FOUND") {
      res.status(500).json({ description: "User not exist" });
      res.end();
   }

   if (err.message === "jwt expired") {
      return res.status(401).send(tokenExpired);
   }
   if (err.message === "Token signature expired") {
      return res.status(401).send({
         code: "EA0045",
         userMessage: "E0037",
         message: "Token signature expired",
      });
   }

   let message = "Fatal Error";

   if (process.env.NODE_ENV !== "production") {
      message = {
         name: err.name,
         description: err.message,
         stack: err.stack,
      };
   }

   res.status(500).send({
      code: "EA0001",
      userMessage: "F0001",
      message,
   });
};

module.exports = handleError;
