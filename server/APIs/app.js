// const mysql = require('mysql');
const { Connection, Request } = require("tedious");
const express = require('express');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const { application } = require("express");
var app = express();

//Configuring express server
app.use(bodyparser.json());

dotenv.config();

// connection configurations
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: dotenv.config().parsed.DB_USER,
//     password: dotenv.config().parsed.DB_PASSWORD,
//     database: 'analysis_tool'
// });

// Create connection to database
const config = {
    authentication: {
        options: {
            userName: process.env.DB_USER, // update me
            password: process.env.DB_PASSWORD, // update me
            rowCollectionOnDone: true,
            rowCollectionOnRequestCompletion: true
        },
        type: 'default'
    },
    server: "analysistooldata.database.windows.net", // update me
    options: {
        database: "analysis_tool", //update me
        encrypt: true,
        instaceName: "analysistooldata",
        port: 1433
    },
    debug: {
        packet: true,
        data: true,
        payload: true,
        token: true,
        log: true
    }
};

const connection = new Connection(config);
connection.on("connect", err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to the database");
    }
});
connection.connect();

//get all machine details
async function queryDatabase(){
    
    const request = new Request(`SELECT * FROM machines;`, (err, rowCount) => {
        if(err){
            console.log(err);
        }
        console.log(`${rowCount} rows`);
    });
    return await new Promise((resolve, reject) => {
        const result = [];
        request.on("row", (columns) => {
            const row = {};
            columns.forEach((column) => {
                row[column.metadata.colName] = column.value;
            });
            result.push(row);
            // console.log(result);
        });
        request.on('error', err => reject(err));
        request.on('doneProc', rowCount => resolve(result));
        connection.execSql(request);
        console.log(result);
    });
}

// get all machine details

app.get('/api/machines',  function(req, res) {
    const data = queryDatabase().then(result => result);
    res.send(data);
});


// import routes
authRoute = require('./routes/auth.js');

// route middleware
// app.use('/api/users', authRoute);

//get all machine details
// app.get("/api/machines" , (req,res)=>{
// 	const sqlMachines = "SELECT * FROM machines;"
// 	db.query(sqlMachines,(err,result)=>{
// 		res.send(result);
// 	})
// });

// start the server and connect to the database in it
app.listen(3001, async () => {
    console.log('Server started on port 3001');
});
