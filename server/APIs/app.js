const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
var app = express();

//Configuring express server
app.use(bodyparser.json());

// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: dotenv.config().parsed.DB_PASSWORD,
    database: 'analysis_tool'
});

// connect to database and check whether the connection is successful or not
mc.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + mc.threadId);
}
);
