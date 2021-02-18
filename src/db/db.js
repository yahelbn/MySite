const { connection } = require("./dbSetup");
const utils = require("./utils");
connection.connect();

/**
 * fetch data with query below
 * gets an sql command
 */
exports.do = function (query) {
  return new Promise((resolve, reject) => {
    connection.query(query, function (error, results) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// UPDATE `sellers` SET `seller_phone` = JSON_SET(`seller_phone`, {"0":"33565388","1":"33565399"}) WHERE `seller_id` = 8

// /**
//  * fetch the desired fields from the desired table by id
//  * @param {*} tableName
//  * @param {*} fields
//  * @param {*} id
//  */
// exports.doMultiple = function (tableName, fields, attribute, values) {
//   connection.query(
//     `SELECT ${fields.toString()} FROM ${tableName} WHERE ${attribute} in(${values.toString()})`,
//     function (error, results) {
//       if (error) {
//         connection.end();
//         throw error;
//       } else {
//         connection.end();
//         return results;
//       }
//     }
//   );
//   connection.query(asdasd);
// };

/**
 * update data with queries below
 */
exports.originUpdate = function (updateCommand) {
  connection.query(updateCommand, function (error) {
    if (error) throw error;
  });
};

/**
 * adds the inserted data to the desired table
 * @param {*} tableName
 * @param {*} data json of the desired data
 */
exports.add = function (tableName, data) {
  connection.query(`INSERT INTO ${tableName} SET ?`, data, function (error) {
    if (error) throw error;
  });
};

// /**
//  * updates the desired row with the desired data
//  * @param {*} tableName
//  * @param {*} id id of row you want to change
//  * @param {*} data json of the data to update
//  */
// exports.update = function (tableName, id, data) {
//   let { fields, values } = utils.parseUpdate(data);
//   values.push(id);
//   connection.query(
//     `UPDATE ${tableName} SET ${fields} WHERE id = ?`,
//     values,
//     function (error) {
//       if (error) throw error;
//     }
//   );
// };
