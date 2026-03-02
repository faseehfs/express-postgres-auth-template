const connection = require("../config/db");

function getAllUsers(callback) {
  const query = "SELECT username FROM users";
  connection.query(query, callback);
}

module.exports = { getAllUsers };
