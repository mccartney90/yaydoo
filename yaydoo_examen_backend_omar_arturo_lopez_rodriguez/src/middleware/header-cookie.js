import dotenv from "dotenv";
import jwt from "jsonwebtoken";
// import jwt from './jwt';
import Str from "./../helpers/StringsHelper";
import encrypt from "./encrypt";
dotenv.config();

const formatCookies = (cookies) => {
   const cookiesList = cookies
      .split(";")
      .map((v) => v.split("="))
      .reduce((acc, v) => {
         acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
         return acc;
      }, {});

   return cookiesList;
};

const getAuthCookie = async (cookies, nameCookie) => {
   try {
      let hasToken = false;
      let token = "";

      if (!cookies) {
         token = encrypt.createToken({}, process.env.SECRET, process.env.JWT_EXPIRATION_TIME);
      } else {
         const cookiesList = Str.rtrim(cookies, ";")
            .split(";")
            .map((v) => v.split("="))
            .reduce((acc, v) => {
               acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
               return acc;
            }, {});
         console.log("cookiesList", cookiesList);
         if (cookiesList[nameCookie]) {
            hasToken = true;
            token = cookiesList[nameCookie];
         } else {
            token = encrypt.createToken({}, process.env.SECRET, process.env.JWT_EXPIRATION_TIME);
         }
      }
      let payload;
      try {
         payload = await jwt.verify(token, SECRET);
      } catch (e) {
         hasToken = false;
         token = null;
      }

      return {
         hasToken,
         token,
         payload,
      };
   } catch (e) {
      console.log("Error>", e);
      return null;
   }
};

export default {
   formatCookies,
   getAuthCookie,
};
