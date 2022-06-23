const router = require('express').Router();

// imports user.controller
const moldController = require("../controllers/mold.controller");

// resisters a new user
router.get("/", moldController.all);

// logs in a user
// router.post("/:moldID", moldController.update);

// exports the router
module.exports = router;