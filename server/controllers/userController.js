const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

async function getAllUsers(req, res, next) {
  const users = await userModel.getAllUsers();
  res.json(users);
}

async function createNewUser(req, res, next) {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    await userModel.createNewUser(req.body.username, req.body.email, hash);
    req.session.username = req.body.username;
    res.json({ message: "User created" });
  } catch (err) {
    res
      .status(400)
      .json({ error: "An error occured while creating new user." });
  }
}

async function getUserDetails(req, res, next) {
  try {
    const user_details = await userModel.getUserDetails(req.session.username);
    res.json({ user_details: user_details });
  } catch {
    res.json({ error: "Failed to get user details." });
  }
}

async function login(req, res, next) {
  const { username, password } = req.body;

  const userDetails = await userModel.getUserDetails(username);

  if (userDetails == null) {
    return res.status(400).json({ error: "Username is invalid." });
  }

  const storedHash = userDetails.password_hash;
  const isMatch = await bcrypt.compare(password, storedHash);

  if (!isMatch) {
    return res.status(400).json({ error: "Password is incorrect." });
  }

  req.session.username = username;
  res.json({ message: "Success." });
}

async function logout(req, res, next) {
  req.session.destroy();
  res.redirect("/");
}

async function isLoggedIn(req, res, next) {
  if (req.session.username) {
    res.json({ isLoggedIn: true });
  } else {
    res.json({ isLoggedIn: false });
  }
}

async function deleteUser(req, res, next) {
  const rowCount = await userModel.deleteUser(req.body.username);

  if (rowCount === 0) {
    return res.status(404).json({ error: "User not found." });
  }

  return res.json({ message: "Success." });
}

module.exports = {
  getAllUsers,
  createNewUser,
  getUserDetails,
  login,
  isLoggedIn,
  logout,
  deleteUser,
};
