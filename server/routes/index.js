const router = require("express").Router();
const connection = require("../db");
const bcrypt = require("bcrypt");

router.get("/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

router.get("/all-users", (req, res) => {
  connection.query("SELECT * FROM users", (err, rows, fields) => {
    res.json({ rows: rows });
  });
});

router.post("/new-user", (req, res) => {
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
            error: "Database error.",
          });
        }

        return res.json({ message: "User created." });
      },
    );
  });
});

module.exports = router;
