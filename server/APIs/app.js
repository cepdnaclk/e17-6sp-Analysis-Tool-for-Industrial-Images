const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
var app = express();

//Configuring express server
app.use(bodyparser.json());

// connection configurations
const db = mysql.createConnection({
    host: 'localhost',
    user: dotenv.config().parsed.DB_USER,
    password: dotenv.config().parsed.DB_PASSWORD,
    database: 'analysis_tool'
});

// import routes
authRoute = require('./routes/auth.js');

// route middleware
app.use('/api/users', authRoute);

//get all machine details
app.get("/api/machines" , (req,res)=>{
	const sqlMachines = "SELECT * FROM machines;"
	db.query(sqlMachines,(err,result)=>{
		res.send(result);
	})
});

// start the server and connect to the database in it
app.listen(3001, async () => {
    console.log('Server started on port 3001');
});
