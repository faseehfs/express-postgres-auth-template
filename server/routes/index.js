const router = require("express").Router();

router.use("/user", require("./userRoutes"));

router.get("/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

module.exports = router;
