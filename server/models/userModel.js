const connection = require("../config/db");

async function getAllUsers(callback) {
  return new Promise((resolve, reject) => {
    connection.query("SELECT username FROM users", (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
}

async function createNewUser(username, email, password_hash, callback) {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)",
      [username, email, password_hash],
      (err, result) => {
        if (err) return reject(err);
        resolve(result);
      },
    );
  });
}

async function getUserDetails(username) {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM users WHERE username = ?",
      [username],
      (err, result) => {
        if (err) return reject(err);
        resolve(result[0]);
      },
    );
  });
}

module.exports = { getAllUsers, createNewUser, getUserDetails };
