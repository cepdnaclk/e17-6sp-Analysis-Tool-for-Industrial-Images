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
}

// check whether a machine exists in the machines table
Machine.checkMachine = async (machineID) => {
    const row = await sql.query("SELECT * FROM machines WHERE machineID = ?", [machineID]);
    if (row.length > 0) {
        return true;
    }
    return false;
}

// Machine.checkMachine = (machineID, result) => {
//     sql.query(`SELECT * FROM machines WHERE machineID = ?`, [machineID], (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             return;
//         }
//         if (res.length) {
//             console.log("found machine");
//             return "machine exists";
//         }
//         // not found machine with the id
//         result({ kind: "not_found" }, null);
//         return "machine does not exist";
//     }
//     );
// }

// create a new machine
Machine.create = async (newMachine) => {
    // insert the new machine into machines table
    await sql.query("INSERT INTO machines SET ?", newMachine);
    return true;
}

module.exports = Machine;