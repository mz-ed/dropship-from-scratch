const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "12Itachi",
  database: "dropship",
});

module.exports = pool;
