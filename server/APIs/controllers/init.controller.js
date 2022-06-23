// import init model
const initModel = require("../models/init.model");

// import validation
const { machineCreateValidation } = require("../validation/machineValidation");

exports.init = async (req, res) => {
    // attributes
    var machineID = req.body.machineID;
    var moldID = req.body.moldID;
    var moldShots = req.body.moldShots;
    var failedShots = req.body.failedShots;
    var prodRate = req.body.prodRate;
    var prod_start_date = req.body.prod_start_date;
    var prod_end_date = req.body.prod_end_date;
    var monaNumber = req.body.monaNumber;
    var material = req.body.material;
    var moldMaker = req.body.moldMaker;

    // validation
    const error  = machineCreateValidation(req.body);
    if (error) {
        // create a json response
        res.status(400).json({
            success: false,
            status: 400,
            message: error.details[0].message
        });
        return;
    }
    
}