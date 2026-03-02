const router = require("express").Router();
const userController = require("../controllers/userController");
const restrict = require("../middleware/restrict");

router.get("/all", userController.getAllUsers);
router.post("/new", userController.createNewUser);
router.get("/password", restrict, userController.getPasswordHash);

module.exports = router;
