const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "my_user",
  password: "my_password",
  database: "express_db",
});

module.exports = connection;
