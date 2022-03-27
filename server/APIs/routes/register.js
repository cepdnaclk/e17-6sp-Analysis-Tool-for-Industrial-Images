// import packages
const express = require('express');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const mysql = require('mysql');
const router = express.Router();

// create route to register a new user
router.post('/', (req, res) => {
    // get the data from the request
    const data = req.body;
    
    // check whether the empID exists in the employees table and if not, register the user
    mc.query('SELECT * FROM employees WHERE empID = ?', [data.empID], (err, result) => {
        if (err) throw err;
        if (result.length === 0) {
            // check whether the user exists in the password table and if not, register the user
            mc.query('SELECT * FROM passwords WHERE empID = ?', [data.empID], (err, result) => {
                if (err) throw err;
                if (result.length === 0) {
                    // register the user
                    mc.query('INSERT INTO passwords (empID, password) VALUES (?, ?)', [data.empID, data.password], (err, result) => {
                        if (err) throw err;
                        res.send('User registered successfully!');
                    });
                }
                else {
                    res.send('User already exists!');
                }
            });
        } else {
            res.send('Error: Forbiden!');
        }
    });
});