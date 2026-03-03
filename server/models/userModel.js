const pool = require("../config/db");

async function getAllUsers() {
  try {
    const result = await pool.query("SELECT username FROM users");
    return result.rows;
  } catch (err) {
    throw err;
  }
}

async function createNewUser(username, email, password_hash) {
  try {
    const result = await pool.query(
      "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *",
      [username, email, password_hash],
    );
    return result.rows[0];
  } catch (err) {
    throw err;
  }
}

async function getUserDetails(username) {
  try {
    const result = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    return result.rows[0];
  } catch (err) {
    throw err;
  }
}

module.exports = { getAllUsers, createNewUser, getUserDetails };
