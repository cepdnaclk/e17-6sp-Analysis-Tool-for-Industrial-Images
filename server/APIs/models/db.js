// import packages
// const mysql = require("mysql");
const { Connection, Request } = require("tedious");
const util = require('util')
const config = require('../config/config');

// create a connection to the database
const connection = new Connection(config);

// connect to the database
connection.on("connect", err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the database");
    }
});


// mc.query = util.promisify(mc.query);
// connection.query = util.promisify(connection.query);

module.exports = connection;