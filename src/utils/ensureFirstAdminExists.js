const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

async function ensureFirstAdminExists() {
  const user = await userModel.getUserByUsername("admin");
  if (!user) {
    const password_hash = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
    await userModel.createNewUser(
      "admin",
      "example@example.com",
      password_hash,
      "admin",
    );
    console.log("Created 'admin'");
  } else {
    console.log("'admin' already exists");
  }
}

module.exports = ensureFirstAdminExists;
