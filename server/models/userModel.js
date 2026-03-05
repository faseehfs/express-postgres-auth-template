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
  const result = await pool.query(
    "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *",
    [username, email, password_hash],
  );
  // If the query cannot be executed successfully, pool.query(...) throws an
  // error (rejects the Promise) rather than returning a result.
  // This error can be caught inside the controller.

  return result.rows[0];
}

async function getUserDetails(username) {
  const result = await pool.query("SELECT * FROM users WHERE username = $1", [
    username,
  ]);

  return result.rows[0] ?? null;
}

async function deleteUser(username) {
  const result = await pool.query("DELETE FROM users WHERE username = $1", [
    username,
  ]);

  return result.rowCount;
}

module.exports = { getAllUsers, createNewUser, getUserDetails, deleteUser };
