// import packages
const bcrypt = require('bcrypt');

// import user model
const User = require('../models/user.model');

exports.register = async (req, res) => {
    // hash the password with salt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // check whether empID exists in the employees table
    const empID = req.body.empID;
    // const empStatus = await mc.query(`SELECT * FROM employees WHERE empID = '${empID}'`);

    // create a user object
    const user = new User({
        empID: empID,
        password: hashedPassword
    });

    // create a new user
    const response = User.create(user);

    // if user exists
    if (response === 0) {
        res.status(400).send('User already exists');
    }
    else if (response === 2) {
        res.status(400).send('Forbidden');
    }
    else {
        res.status(201).send('User added');
    }
}