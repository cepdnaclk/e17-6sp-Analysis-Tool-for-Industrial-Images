// imports router
const router = require("express").Router();
// imports user.controller
const userController = require("../controllers/user.controller");


// resisters a new user
router.post("/register", userController.register);

// exports the router
module.exports = router;