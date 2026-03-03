const router = require("express").Router();
const userController = require("../controllers/userController");
const restrict = require("../middleware/restrict");

router.get("/all", userController.getAllUsers);
router.get("/details", restrict, userController.getUserDetails);
router.post("/new", userController.createNewUser);
router.post("/login", userController.login);

module.exports = router;
