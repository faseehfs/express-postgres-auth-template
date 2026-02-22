const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "my_user",
  password: "my_password",
  database: "express_db",
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1); // stop app if DB unavailable
  }
  console.log("Connected to MySQL");
});

module.exports = connection;
