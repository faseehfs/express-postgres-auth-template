const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

async function getAllUsers(req, res, next) {
  const users = await userModel.getAllUsers();
  res.json(users);
}

async function createNewUser(req, res, next) {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ error: "Username, email, and password are required" });
    }

    const password_hash = await bcrypt.hash(password, 10);
    const user = await userModel.createNewUser(username, email, password_hash);
    req.session.userId = user.id;
    req.session.role = user.role;
    res.json({ message: "User created" });
  } catch (err) {
    if (err.code === "23505") {
      // PostgreSQL unique violation
      return res
        .status(409)
        .json({ error: "Username or email already exists" });
    }
    next(err);
  }
}

async function getUserDetails(req, res, next) {
  const userDetails = await userModel.getUserById(req.session.userId);
  res.json({ user_details: userDetails });
}

async function login(req, res, next) {
  const { username, password } = req.body;

  const userDetails = await userModel.getUserByUsername(username);

  if (userDetails === null) {
    return res.status(400).json({ error: "Username or password is incorrect" });
  }

  const storedHash = userDetails.password_hash;
  const isMatch = await bcrypt.compare(password, storedHash);

  if (!isMatch) {
    return res.status(400).json({ error: "Username or password is incorrect" });
  }

  req.session.userId = userDetails.id;
  req.session.role = userDetails.role;
  res.json({ message: "Success" });
}

async function logout(req, res, next) {
  req.session.destroy();
}

async function isLoggedIn(req, res, next) {
  if (req.session.userId) {
    res.json({ isLoggedIn: true });
  } else {
    res.json({ isLoggedIn: false });
  }
}

async function deleteUser(req, res, next) {
  const rowCount = await userModel.deleteUser(req.body.username);

  if (rowCount === 0) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.json({ message: "Success" });
}

async function deleteAllUsers(req, res, next) {
  userModel.deleteAllUsers();
  res.json({ message: "Ok" });
}

module.exports = {
  deleteAllUsers,
  getAllUsers,
  createNewUser,
  getUserDetails,
  login,
  isLoggedIn,
  logout,
  deleteUser,
};
