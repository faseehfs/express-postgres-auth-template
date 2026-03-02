const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "my_user",
  password: "my_password",
  database: "express_db",
});

const schema = `CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

connection.query(schema, (err, results, fields) => {
  // The query() method takes the query to execute and a function which should
  // be called after executing the query.
  // It calls the given function with three positional arguments.

  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("Database connected.");
  }
});

module.exports = connection;

// Without exporting, functions and variables are not accessible from other
// modules.
// Here, we are exporting the "connection" object, which can be imported from
// other modules by "const connection = require('path-to-this-file')".

// If we export multiple stuff, they will appear as a JavaScript object.
// We need to unpack them, like this:
// const { add, sub } = require('./math');
