const router = require("express").Router();
const connection = require("../config/db");
const bcrypt = require("bcrypt");
const userController = require("../controllers/userController");

router.get("/all", userController.getAllUsers);

router.post("/new", (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, password_hash) => {
    if (err) {
      return res.status(400).json({
        error: "Hashing failed.",
      });
    }

    connection.query(
      "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)",
      [req.body.username, req.body.email, password_hash],
      (err, rows, fields) => {
        if (err) {
          return res.status(400).json({
            error: "Invalid details.",
          });
        }

        return res.json({ message: "User created." });
      },
    );
  });
});

module.exports = router;
