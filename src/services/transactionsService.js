//file for business purposes.
//routes functionality and logics shall be here
const db = require("../db/db");
const { tables } = require("../config/constants.json");

const getById = async (id) => {
  console.log("getting an address with id: ", id);
  try {
    return await db.do(
      `select * from ${tables.ADDRESS} where AAddressID = ${id}`
    );
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

module.exports = {
  getById,
};
