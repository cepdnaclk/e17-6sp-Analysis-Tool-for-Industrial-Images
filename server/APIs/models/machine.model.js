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
    const status = db.query(sqlmachines,data.machineID,callback,function(err,result){
        console.log(status);
        if(result){
            callback(null,result);
        }else{
            this.callback(err,null);
        }    
	})
}

module.exports.update = function(data,callback){


    if(data.failedShots==1){
        const updateFailedShots = "UPDATE machines SET failedShots = failedShots + 1 WHERE machineID = ? ;"
        db.query(updateFailedShots,data.machineID,(err,result)=>{
            if(err)throw err;
            // res.send(result);
            console.log(result);
            console.log("update");
        })
    }

    const updateMoldShots = "UPDATE machines SET moldShots = moldShots + 1 WHERE machineID = ?;"
    // check whether empID exists in the employees table
    const status = db.query(updateMoldShots,data.machineID,callback,function(err,result){
        console.log(status);
        if(result){
            callback(null,result);
        }else{
            this.callback(err,null);
        }    
	})
}
