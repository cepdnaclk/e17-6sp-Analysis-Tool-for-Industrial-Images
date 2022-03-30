const sql = require("./db.js");

// user constructor
const User = function (user) {
    this.empID = user.empID;
    this.password = user.password;
}

// create a new user
User.create = (newUser) => {
    // check whether empID exists in the employees table
    const empStatus = sql.query(`SELECT * FROM employees WHERE empID = '${newUser.empID}'`);

    // if empID exists
    if (empStatus.length > 0) {
        // check whether the empID exists in passwords table
        const pwStatus = sql.query(`SELECT * FROM passwords WHERE empID = '${newUser.empID}'`);
        // if empID exists in passwords table
        if (pwStatus.length > 0) {
            // user already exists
            return 0;
        } else {
            // insert the new user into passwords table
            sql.query("INSERT INTO passwords SET ?", newUser, (err, res) => {
                if (err) {
                    console.log("error: ", err);
                    return err;
                }
                console.log("user added");
                return 1;
            }
            );
        }
    }
    else {
        // empID does not exist
        return 2;
    }
}


// export the user model
module.exports = User;