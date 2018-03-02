/**
 * POCController
 *
 * @description :: Server-side logic for managing POCS
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	get: function(req, res){
        POC.getData(function(error, responseData){
            if(error){
                res.status(error.status).json({msg: error.message, status: false});
            }else{
                res.json({data: responseData, status: true});
            }
        });
    },

    create: function(req, res){
        POC.createData(req.body, function(error, createdData){
            if(error){
                res.status(error.status).json({msg: error.message, status: false});
            }else{
                res.json({data: createdData, status: true});
            }
        });
    },

    update: function(req, res){
        POC.updateData(req.body, function(error, updatedData){
            if(error){
                res.status(error.status).json({msg: error.message, status: false});
            }else{
                res.json({data: updatedData, status: true});
            }
        });
    },

    delete: function(req, res){
        POC.deleteData(req.body.id, function(error){
            if(error){
                res.status(error.status).json({msg: error.message, status: false});
            }else{
                res.json({status: true});
            }
        });
    }
};

