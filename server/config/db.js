const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "my_user",
  password: "my_password",
  database: "express_db",
  port: 5432, // default PostgreSQL port
});

module.exports = pool;
