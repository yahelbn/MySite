//file for business purposes.
//routes functionality and logics shall be here
const db = require("../db/db");

const getUser = async (email) => {
  console.log("fetching user data for email " + email);
  try {
    return await db.do(`select * from Users where email = "${email}"`);
  } catch (e) {
    throw new Error(e.message);
  }
};

const addUser = async (userData) => {
  console.log("adding a new user");
  try {
    return await db.do(
      `INSERT INTO Users (${Object.keys(
        userData
      ).toString()}) VALUES (${Object.values(userData).toString()}`
    );
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  getUser,
  addUser,
};
