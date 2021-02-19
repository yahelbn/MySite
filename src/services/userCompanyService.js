//file for business purposes.
//routes functionality and logics shall be here
const db = require("../db/db");

const getByEmail = async (email) => {
  try {
    return await db.do(`select * from UserCompany where UEmail = "${email}"`);
  } catch (e) {
    throw new Error(e);
  }
};

const getByEmailAndStatus = async (email, status) => {
  try {
    return await db.do(
      `select * from UserCompany where UEmail = "${email}" and UUserStatusInCompany="${status}"`
    );
  } catch (e) {
    throw new Error(e);
  }
};

const getByEmailAndStatuses = async (email, statuses) => {
  try {
    return await db.do(
      `select * from UserCompany where UEmail = "${email}" and UUserStatusInCompany in(${statuses
        .map((x) => '"' + x + '"')
        .toString()})`
    );
  } catch (e) {
    throw new Error(e);
  }
};

const addUserCompany = async (userCompanyData) => {
  console.log("adding a new user");
  try {
    return await db.do(
      `INSERT INTO UserCompany (${Object.keys(
        userCompanyData
      ).toString()}) VALUES (${Object.values(userCompanyData).toString()}`
    );
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  getByEmailAndStatus,
  addUserCompany,
  getByEmailAndStatuses,
  getByEmail,
};
