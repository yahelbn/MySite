/**
 * a file used to initiate a db connection
 * and to fetch and update db data
 */

const mysql = require("mysql");
exports.connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
