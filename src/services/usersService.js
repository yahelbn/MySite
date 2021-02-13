//file for business purposes.
//routes functionality and logics shall be here
const db = require("../db/db");
const utils = require("./utils");

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
      ).toString()}) VALUES (${Object.values(userData).toString()})`
    );
  } catch (e) {
    throw new Error(e.message);
  }
};

const updateUserByEmail = async (updateByEmailJson) => {
  const { email, userData } = updateByEmailJson;
  console.log(
    `UPDATE Users SET ${utils.jsonToEqualsKeyValue(
      userData
    )} where UEmail = "${email}"`
  );
  try {
    return await db.do(
      `UPDATE Users SET ${utils.jsonToEqualsKeyValue(
        userData
      )} where UEmail = "${email}"`
    );
  } catch (e) {
    console.log(e);
    throw new Error(e.toString());
  }
};

module.exports = {
  getUser,
  addUser,
  updateUserByEmail,
};
