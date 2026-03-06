const pool = require("../config/db");

async function getAllUsers() {
  const result = await pool.query("SELECT username FROM users");
  return result.rows;
}

async function createNewUser(username, email, password_hash) {
  const result = await pool.query(
    "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *",
    [username, email, password_hash],
  );
  // If the query cannot be executed successfully, pool.query(...) throws an
  // error (rejects the Promise) rather than returning a result.
  // This error can be caught inside the controller.

  return result.rows[0];
}

async function getUserById(userId) {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [
    userId,
  ]);

  return result.rows[0] ?? null;
}

async function getUserByUsername(username) {
  const result = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);

  return result.rows[0] ?? null;
}

async function getUsernameByEmail(email) {
  const result = await pool.query(
    "SELECT username FROM users WHERE email = $1",
    [email],
  );

  return result.rows[0]?.username ?? null;
}

async function deleteUser(username) {
  const result = await pool.query("DELETE FROM users WHERE username = $1", [
    username,
  ]);

  return result.rowCount;
}

async function deleteAllUsers() {
  pool.query("TRUNCATE TABLE users");
}

module.exports = {
  deleteAllUsers,
  getAllUsers,
  createNewUser,
  getUserById,
  deleteUser,
  getUserByUsername,
  getUsernameByEmail,
};
