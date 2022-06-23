const mysql = require('mysql');
const dotenv = require('dotenv');

const db = require("./db.js");

module.exports.all = function(data,callback){
    var sqlmachines = "SELECT * FROM machines;"

    // check whether empID exists in the employees table
    const status = db.query(sqlmachines,callback,function(err,result){
        console.log(status);
        if(result){
            callback(null,result);
        }else{
            this.callback(err,null);
        }    
	})
}


module.exports.show = function(data,callback){
    var sqlmachines = "SELECT * FROM machines where machineID = ?;"

    // check whether empID exists in the employees table
    const status = db.query(sqlmachines,callback,function(err,result){
        console.log(status);
        if(result){
            callback(null,result);
        }else{
            this.callback(err,null);
        }    
	})
}
