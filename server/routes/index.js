const router = require("express").Router();

router.get("/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

module.exports = router;
