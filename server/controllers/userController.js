const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

async function getAllUsers(req, res, next) {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(400).json({ error: "The server encountered an error." });
  }
}

async function createNewUser(req, res, next) {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const result = await userModel.createNewUser(
      req.body.username,
      req.body.email,
      hash,
    );
    req.session.username = req.body.username;
    res.json({ message: "User created" });
  } catch (err) {
    next(err);
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
  try {
    const { username, password } = req.body;
    const userDetails = await userModel.getUserDetails(username);
    const storedHash = userDetails.password_hash;
    console.log(storedHash);

    if (!storedHash) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, storedHash);

    if (isMatch) {
      req.session.username = username;
      res.json({ message: "Success." });
    } else {
      res.status(400).json({ error: "Invalid username or password" });
    }
  } catch (err) {
    res.status(400).json({ error: "An error occurred." });
  }
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

module.exports = {
  getAllUsers,
  createNewUser,
  getUserDetails,
  login,
  isLoggedIn,
  logout,
};
