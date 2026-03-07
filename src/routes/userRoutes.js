const router = require("express").Router();
const userController = require("../controllers/userController");
const ensureLoggedIn = require("../middleware/ensureLoggedIn");
const ensureIsAdmin = require("../middleware/ensureIsAdmin");

router.get("/all", ensureIsAdmin, userController.getAllUsers);
router.get("/details", ensureLoggedIn, userController.getUserDetails);
router.get("/is-logged-in", userController.isLoggedIn);
router.get("/delete-all", ensureIsAdmin, userController.deleteAllUsers);
router.get("/logout", userController.logout);
router.post("/new", userController.createNewUser);
router.post("/login", userController.login);
router.post("/delete", ensureIsAdmin, userController.deleteUser);

module.exports = router;
