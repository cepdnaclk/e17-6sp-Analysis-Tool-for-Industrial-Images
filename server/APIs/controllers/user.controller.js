// import packages
const bcrypt = require('bcrypt');
const mysql = require('mysql');

// import config
const config = require('../config/config');

// create mysql connection
const mc = mysql.createConnection(config);

// The below code has to updated. A user model is to be created. Will do soon :)

// connect to database
mc.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('Database up and running! (Connected as id ' + mc.threadId + ')');
});

exports.register = async (req, res) => {
    // hash the password with salt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // check whether empID exists in the employees table
    const empID = req.body.empID;
    const empStatus = await mc.query(`SELECT * FROM employees WHERE empID = '${empID}'`);

    // if empID exists
    if (empStatus.length > 0) {
        // check whether the empID exists in passwords table
        const pwStatus = await mc.query(`SELECT * FROM passwords WHERE empID = '${empID}'`);
        // if empID exists in passwords table
        if (pwStatus.length > 0) {
            // user already exists
            res.status(400).json({
                message: 'User already exists'
            });
        } else {
            // create a new user
            const user = {
                empID: req.body.empID,
                password: hashedPassword
            };
            // insert the user into passwords table
            await mc.query('INSERT INTO passwords SET ?', user);
            // send a response
            res.status(200).json({
                message: 'User created'
            });
        }
    } else {
        // empID does not exist
        res.status(400).json({
            // forbidden
            message: 'User does not exist'
        });
    }
    
}