const router = require("express").Router();
const connection = require("../db");
const bcrypt = require("bcrypt");

router.get("/all", (req, res) => {
  connection.query("SELECT username FROM users", (err, rows, fields) => {
    const usernames = rows.map((row) => row.username);
    res.json({ usernames: usernames });
  });
});

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
