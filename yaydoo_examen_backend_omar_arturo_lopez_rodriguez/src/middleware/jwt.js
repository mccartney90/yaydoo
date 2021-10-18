import jwt from "jsonwebtoken";
import bearer from "token-extractor";

const sign = (payload, secret, options) => {
   return new Promise((resolve, reject) => {
      jwt.sign(payload, secret, options, (err, token) => {
         if (err) {
            return reject(err);
         }

         resolve(token);
      });
   });
};

const verify = (token, secret, options) => {
   return new Promise((resolve, reject) => {
      jwt.verify(token, secret, options, (err, decoded) => {
         if (err) {
            return reject(err);
         }

         resolve(decoded);
      });
   });
};

const extractToken = (req) => {
   return new Promise((resolve, reject) => {
      bearer(req, (err, token) => {
         if (err) {
            const customErr = new Error("TokenExtractor");
            return reject(customErr);
         }

         resolve(token);
      });
   });
};

module.exports = {
   sign,
   verify,
   extractToken,
};
