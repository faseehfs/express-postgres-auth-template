const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

async function createNewUser(username, email, password, role = "user") {
  const password_hash = await bcrypt.hash(password, 10);
  return await userModel.createNewUser(username, email, password_hash, role);
}

module.exports = { createNewUser };
