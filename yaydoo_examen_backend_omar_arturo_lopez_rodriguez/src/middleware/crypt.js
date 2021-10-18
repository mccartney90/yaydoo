import bcrypt from "bcrypt";

async function hash(str) {
   const hash = await bcrypt.hash(str, 10);
   return hash;
}

async function compare(originalStr, hashedStr) {
   const result = await bcrypt.compare(originalStr, hashedStr);
   return result;
}

module.exports = {
   hash,
   compare,
};
