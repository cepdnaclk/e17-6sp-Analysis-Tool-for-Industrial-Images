
// import user model
const Machine = require('../models/machine.model');

const dotenv = require('dotenv');

exports.all = async (req, res) => {
    var data = req.body;

    // create a new user
    const resp = Machine.all(data, function(err,result){
        // console.log(result);
        //console.log(err);

        if(resp === 2){
            res.status(400).send('Query error!');
        }else{
            res.send(result);
        }

    });

}