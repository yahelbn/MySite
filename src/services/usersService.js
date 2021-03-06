//file for business purposes.
//routes functionality and logics shall be here
const db = require("../db/db");
const utils = require("./utils");
const { tables } = require("../config/constants.json");

const getUser = async (email) => {
  console.log("fetching user data for email " + email);
  try {
    return await db.do(
      `select * from ${tables.USERS} where UEmail = "${email}"`
    );
  } catch (e) {
    console.error(e);
    throw new Error(e.message);
  }
};

const addUser = async (userData) => {
  console.log(
    "adding a new user with data",
    JSON.stringify(userData, undefined, 2)
  );
  try {
    return await db.do(
      `INSERT INTO ${tables.USERS} (${Object.keys(
        userData
      ).toString()}) VALUES (${Object.values(userData)
        .map((element) => {
          return `"${element}"`;
        })
        .join(",")})`
    );
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

const updateUserByEmail = async (updateByEmailJson) => {
  const { email, userData } = updateByEmailJson;
  console.log(
    "updating a user with data",
    JSON.stringify(userData, undefined, 2)
  );
  try {
    return await db.do(
      `UPDATE ${tables.USERS} SET ${utils.jsonToEqualsKeyValue(
        userData
      )} where UEmail = "${email}"`
    );
  } catch (e) {
    console.error(e);
    throw new Error(e.toString());
  }
};

module.exports = {
  getUser,
  addUser,
  updateUserByEmail,
};
