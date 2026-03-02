const router = require("express").Router();
const userController = require("../controllers/userController");
const auth = require("../middleware/auth");

router.get("/all", userController.getAllUsers);
router.post("/new", userController.createNewUser);
router.get("/password", auth.restrict, userController.getPasswordHash);

module.exports = router;
