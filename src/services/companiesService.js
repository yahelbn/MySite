//file for business purposes.
//routes functionality and logics shall be here
const db = require("../db/db");

const getByCid = async (cid) => {
  console.log("getting a company with id: ", cid);
  try {
    return await db.do(`select * from Companies where CompanyID = ${cid}`);
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};

const add = async (companyData) => {
  console.log(
    "adding a new company with data",
    JSON.stringify(companyData, undefined, 2)
  );
  try {
    return await db.do(
      `INSERT INTO Companies (${Object.keys(
        companyData
      ).toString()}) VALUES (${Object.values(companyData)
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

const updateByCid = async (updateByEmailJson) => {
  const { cid, companyData } = updateByEmailJson;
  console.log(
    `updating company ${cid} with data`,
    JSON.stringify(companyData, undefined, 2)
  );
  try {
    return await db.do(
      `UPDATE Companies SET ${utils.jsonToEqualsKeyValue(
        companyData
      )} where CompanyID = "${cid}"`
    );
  } catch (e) {
    console.error(e);
    throw new Error(e.toString());
  }
};

module.exports = {
  updateByCid,
  add,
  getByCid,
};
