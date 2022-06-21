const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
var app = express();

//Configuring express server
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

//get selected machine details
app.route("/api/machines/:machine_id")
	.get((req,res)=>{
	const machine_id = req.params.machine_id;
	const sqlMachines = "SELECT * FROM machines where machineID = ? ;"
	db.query(sqlMachines,machine_id,(err,result)=>{
		res.send(result);
	})
	})
	.post((req,res)=>{
		// var jsonStr = JSON.stringify(req.body);

		var machine_id = req.body.machineID;
		var failedShots = req.body.failedShots;

		console.log(machine_id);
		console.log(failedShots);      // your JSON

		const sqlMachines = "UPDATE machines SET failedShots = ? WHERE machineID = ?; "
		db.query(sqlMachines,[failedShots,machine_id],(err,result)=>{
			if(err)throw err;
			res.send(result);
			console.log(result);
			console.log("update");
		})
	});


//get all mold details
app.get("/api/molds" , (req,res)=>{
	const sqlMolds = "SELECT * FROM molds;"
	db.query(sqlMolds,(err,result)=>{
		res.send(result);
	})
});

//get selected mold details
app.route("/api/molds/:mold_id")
	.get((req,res)=>{
		const mold_id = req.params.mold_id;
		const sqlMolds = "SELECT * FROM molds where moldID = ? ;"
		db.query(sqlMolds,mold_id,(err,result)=>{
			res.send(result);
		})
	})
	.post((req,res)=>{
		res.send('POST REQUEST')
	});
	



// start the server and connect to the database in it
app.listen(3001, async () => {
    console.log('Server started on port 3001');
});
