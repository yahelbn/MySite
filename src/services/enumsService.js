//file for business purposes.
//routes functionality and logics shall be here
const db = require("../db/db");
const { tables } = require("../config/constants.json");

const getEnumsByTableName = async (enumsTableName) => {
  console.log("getting all enums");
  try {
    return await db.do(`select * from ${enumsTableName}`);
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

module.exports = {
  getEnumsByTableName,
};
