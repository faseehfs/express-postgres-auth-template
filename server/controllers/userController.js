const userModel = require("../models/userModel");

function getAllUsers(req, res, next) {
  userModel.getAllUsers((err, results) => {
    if (err) return next(err);

    res.json(results);
  });
}

module.exports = { getAllUsers };
