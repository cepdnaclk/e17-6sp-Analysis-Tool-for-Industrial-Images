// import packages
const mysql = require("mysql");
const util = require('util')
const config = require('../config/config');

// create a connection to the database
const mc = mysql.createConnection(config);

// connect to the database
mc.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to the database');
    }
}
);

mc.query = util.promisify(mc.query);

module.exports = mc;