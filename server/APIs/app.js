const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');

var app = express();

// Enables CORS
const cors = require('cors');
app.use(cors({ origin: true }));

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
machineRoute = require('./routes/machine.js')
moldRoute = require('./routes/mold.js')

// route middleware
app.use('/api/users', authRoute);
app.use('/api/machines',machineRoute);
app.use('/api/molds',moldRoute);

//Initialize new run
app.route("/api/init")
	.post((req,res)=>{

	    var machineID = req.body.machineID;
	    var moldID = req.body.moldID;
        var moldShots = req.body.moldShots;
	    var failedShots = req.body.failedShots;
	    var prodRate = req.body.prodRate;
		var prod_start_date = req.body.prod_start_date;
		var prod_end_date = req.body.prod_end_date;
		var monaNumber = req.body.monaNumber;
		var material = req.body.material;
		var moldMaker = req.body.moldMaker;

		const insert_mold = "INSERT INTO molds VALUES(?,?,?,?);"
		db.query(insert_mold,[moldID,monaNumber,material,moldMaker],(err,result)=>{
			if(err)throw err;
			// res.send(result);
			console.log(result);
			console.log("update");
		})

		const insert_machine = "INSERT INTO machines VALUES(?,?,?,?,?,?,?);"
		db.query(insert_machine,[machineID,moldID,moldShots,failedShots,prodRate,prod_start_date,prod_end_date],(err,result)=>{
			if(err)throw err;
			res.send(result);
			console.log(result);
			console.log("update");
		})

	});
	
// Delete all entries 
app.get("/api/del" , (req,res)=>{
	const sqlmachines = "delete from machines;"
	db.query(sqlmachines,(err,result)=>{
		// res.send(result);
	})
	
	const sqlmolds = "delete from molds;"
	db.query(sqlmolds,(err,result)=>{
		res.send(result);
	})
});


// //get selected machine details
// app.route("/api/machines/:machine_id")
// 	.get((req,res)=>{
// 	const machine_id = req.params.machine_id;
// 	const sqlmachines = "select * from machines where machineid = ? ;"
// 	db.query(sqlmachines,machine_id,(err,result)=>{
// 		res.send(result);
// 	})
// 	})
// 	.post((req,res)=>{
// 		// var jsonstr = json.stringify(req.body);

// 		var machineID = req.body.machineID;
// 		var failedShots = req.body.failedShots;

// 		const updateMoldShots = "UPDATE machines SET moldShots = moldShots + 1 WHERE machineID = ? ;"
// 		db.query(updateMoldShots,[machineID],(err,result)=>{
// 			if(err)throw err;
// 			res.send(result);
// 			console.log(result);
// 			console.log("update");
// 		})

// 		if(failedShots==1){
// 			const updateFailedShots = "UPDATE machines SET failedShots = failedShots + 1 WHERE machineID = ? ;"
// 			db.query(updateFailedShots,[machineID],(err,result)=>{
// 				if(err)throw err;
// 				// res.send(result);
// 				console.log(result);
// 				console.log("update");
// 			})
// 		}
// 	});

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
