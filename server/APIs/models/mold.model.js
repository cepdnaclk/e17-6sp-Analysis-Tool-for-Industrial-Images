const mysql = require('mysql');
const dotenv = require('dotenv');

const db = require("./db.js");

module.exports.all = function(data,callback){
    var sqlmolds = "SELECT * FROM molds;"

    // check whether empID exists in the employees table
    const status = db.query(sqlmolds,callback,function(err,result){
        console.log(status);
        if(result){
            callback(null,result);
        }else{
            this.callback(err,null);
        }    
	})
}

module.exports.show = function(data,callback){
    var sqlmachines = "SELECT * FROM molds where moldID = ?;"

    // check whether empID exists in the employees table
    const status = db.query(sqlmachines,data.moldID,callback,function(err,result){
        console.log(status);
        if(result){
            callback(null,result);
        }else{
            this.callback(err,null);
        }    
	})
}


