const sql = require("./db.js");

// machine constructor
const Machine = function (machine) {
    this.machineID = machine.machineID;
    this.moldID = machine.moldID;
    this.moldShots = machine.moldShots;
    this.failedShots = machine.failedShots;
    this.prodRate = machine.prodRate;
    this.prod_start_date = machine.prod_start_date;
    this.prod_end_date = machine.prod_end_date;
    this.monaNumber = machine.monaNumber;
    this.material = machine.material;
    this.moldMaker = machine.moldMaker;
}

// check whether a machine exists in the machines table
Machine.checkMachine = (machineID, result) => {
    sql.query(`SELECT * FROM machines WHERE machineID = ?`, [machineID], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return 1;
        }
        if (res.length) {
            console.log("found machine");
            result(null, res);
            return 1;
        }
        // not found machine with the id
        result({ kind: "not_found" }, null);
        return 1;
    }
    );
}

// create a new machine
Machine.create = (newMachine, result) => {
    
}

module.exports = Machine;