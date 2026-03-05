const router = require("express").Router();
const userController = require("../controllers/userController");
const ensureLoggedIn = require("../middleware/ensureLoggedIn");

router.get("/all", userController.getAllUsers);
router.get("/details", ensureLoggedIn, userController.getUserDetails);
router.get("/is-logged-in", userController.isLoggedIn);
router.get("/delete-all", userController.deleteAllUsers);
router.get("/logout", userController.logout);
router.post("/new", userController.createNewUser);
router.post("/login", userController.login);
router.post("/delete", userController.deleteUser);

module.exports = router;
