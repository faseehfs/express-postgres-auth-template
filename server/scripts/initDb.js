require("dotenv").config();

const pool = require("../config/db");

const dropTable = `DROP TABLE IF EXISTS users;`;

const createTable = `
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

async function init() {
  try {
    await pool.query(dropTable);
    console.log("Users table dropped (if it existed).");

    await pool.query(createTable);
    console.log("Users table created.");
  } catch (err) {
    console.log("Database setup failed:", err);
  } finally {
    await pool.end();
  }
}

init();
