const pool = require("../config/db");

const schema = `
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

async function init() {
  try {
    await pool.query(schema);
    console.log("Users table ready.");
  } catch (err) {
    console.log("Database setup failed:", err);
  } finally {
    await pool.end();
  }
}

init();
