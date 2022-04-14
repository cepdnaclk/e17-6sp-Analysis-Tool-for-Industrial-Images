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

// import routes
authRoute = require('./routes/auth.js');

// route middleware
app.use('/api/users', authRoute);

// start the server and connect to the database in it
app.listen(3000, async () => {
    console.log('Server started on port 3000');
});
