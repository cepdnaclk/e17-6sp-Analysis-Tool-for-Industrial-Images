const router = require('express').Router();


// imports user.controller
const machineController = require("../controllers/machine.controller");

// list all machines
router.get("/", machineController.all);

// list machine details
// router.get("/:machineID", machineController.show);


// logs in a user
// router.post("/:machineID", machineController.update);

// exports the router
module.exports = router;