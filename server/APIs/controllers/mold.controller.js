// import user model
const Mold = require('../models/mold.model');

const dotenv = require('dotenv');

exports.all = async (req, res) => {
    var data = req.body;

    // create a new user
    const resp = Mold.all(data, function(err,result){
        // console.log(result);
        //console.log(err);

        if(resp === 2){
            res.status(400).send('Query error!');
        }else{
            res.send(result);
        }

    });

}

exports.show = async (req, res) => {
    var data = req.params;


    const moldExists = await (Mold.checkMold)(req.params.moldID);
    
    // if mold exists
    if (moldExists) {
        // console.log(req.params.machineID);
        // create a new user
        const resp =Mold.show(data, function(err,result){
            // console.log(result);
            //console.log(err);

            if(resp === 2){
                res.status(400).send('Query error!');
            }else{
                res.send(result);
            }

        });
        return;
    }else{
        // create a json response
        res.status(404).json({
            success: false,
            status: 404,
            message: "Mold does not exists"
        });

        return;
    }
    
}

exports.delete = async (req, res) => {
    var data =  req.params;
    const moldExists = await (Mold.checkMold)(req.params.moldID);
    
    // if mold exists
    if (moldExists) {
        console.log("Deleting Mold")
        
        const resp = Mold.delete(data, function(err,result){
            console.log(result);
            //console.log(err);

            if(resp === 2){
                res.status(400).send('Query error!');
            }else{
                res.send(result);
            }

        });
        return;
    }else{
        // create a json response
        res.status(404).json({
            success: false,
            status: 404,
            message: "Mold does not exists"
        });

        return;
    }
    

}