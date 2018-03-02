/**
 * POC.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    //specify any fixed or mandatory data model keys with types
    
    // example
    // name: {
    //   type: 'string',
    //   required: true
    // }

    //model reference can be done by specifying a existing model name -
    //then in the query you can populate that details from that collection
    // user: {
    //   model: 'user'
    // }
  },

  getData: function(callback){
      POC.find({}).exec(function(err, fetchedData){
          if(err){
              sails.log.error(err);
              callback({status: 500, message: 'Something went wrong while fetching the data. Please check logs'}, null);
          }else{
              callback(null, fetchedData);
          }
      });
  },

  createData: function(requestBody, callback){
      POC.create(requestBody).exec(function(err, createdData){
          if(err){
              sails.log.error(err);
              callback({status: 500, message: 'Something went wrong while creating the data. Please check logs'}, null);
          }else{
              callback(null, createdData);
          }
      });
  },

  updateData: function(requestBody, callback){
      POC.update({id: requestBody.id}, requestBody).exec(function(err, updatedData){
          if(err){
              sails.log.error(err);
              callback({status: 500, message: 'Something went wrong while updating the data. Please check logs'}, null);
          }else{
              callback(null, updatedData);
          }
      });
  },

  deleteData: function(requestId, callback){
      POC.destroy({id: requestId}).exec(function(err){
          if(err){
              sails.log.error(err);
              callback({status: 500, message: 'Something went wrong while deleting the data. Please check logs'});
          }else{
              callback(null);
          }
      });
  }
};

