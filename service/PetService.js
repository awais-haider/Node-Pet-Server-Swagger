
const mongoose = require('mongoose');
var GenerateSchema = require('generate-schema');
const Pet = require('../models/PetStoreModels');

/**
 * Add a new pet to the store
 * 
 *
 * body Pet Pet object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.addPet = function(body) {
  return new Promise(function(resolve, reject) {
      var resultObject = [];
    console.log(JSON.stringify(GenerateSchema.json('Pet', body)));
    var petToBeSaved = new Pet(body);
    petToBeSaved.save(function (err) {
      if (err) {
          console.log('New pet is not stored successfully');
          resultObject[0] = "Failure";
          resultObject[1] = 400;
          reject(resultObject);
      }else {
          console.log('New pet is stored successfully');
          resultObject[0] = petToBeSaved;
          resultObject[1] = 200;
          reject(resultObject);

      }

    });





  });
};


/**
 * Deletes a pet
 * 
 *
 * petId Long Pet id to delete
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deletePet = function(petId,api_key) {
  return new Promise(function(resolve, reject) {

      var resultObject = [];
      Pet.remove({id : petId}).exec().then(result => {
          console.log("From database", result);

          if (result != null) {

              resultObject[0] = result;
              resultObject[1] = 200;
              resolve(resultObject);


          } else {
              resultObject[1] = 400;
              reject(resultObject);
          }
      }).catch(err => {
          resultObject[0] = "";
          resultObject[1] = 404;
          console.log(err);
          reject(resultObject);
      });


  });
};


/**
 * Finds Pets by status
 * Multiple status values can be provided with comma separated strings
 *
 * status List Status values that need to be considered for filter
 * returns List
 **/
exports.findPetsByStatus = function(status) {
  return new Promise(function(resolve, reject) {
      var resultObject = [];
      Pet.find({'status': status }).then(doc => {
          console.log("From database", doc);

          if (doc != null && doc.length > 0) {

              resultObject[0] = doc;
              resultObject[1] = 200;
              resolve(resultObject);


          } else {
              resultObject[0] = "";
              resultObject[1] = 400;
              reject(resultObject);
          }
      }).catch(err => {
          resultObject[0] = "";
          resultObject[1] = 404;
          console.log(err);
          reject(resultObject);
      });
  });
};


/**
 * Finds Pets by tags
 * Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing.
 *
 * tags List Tags to filter by
 * returns List
 **/
exports.findPetsByTags = function(tags) {
  return new Promise(function(resolve, reject) {
      var resultObject = [];
          Pet.find({'tags.name': { $all: tags }}).then(doc => {
          console.log("From database", doc);

          if (doc != null && doc.length > 0) {

              resultObject[0] = doc;
              resultObject[1] = 200;
              resolve(resultObject);


          } else {
              resultObject[0] = "";
              resultObject[1] = 400;
              reject(resultObject);
          }
      }).catch(err => {
          resultObject[0] = "";
          resultObject[1] = 404;
          console.log(err);
          reject(resultObject);
      });

  });
};


/**
 * Find pet by ID
 * Returns a single pet
 *
 * petId Long ID of pet to return
 * returns Pet
 **/
exports.getPetById = function(petId) {
  return new Promise(function(resolve, reject) {

      const id = petId;
      var resultObject = [];
      Pet.find({'id': id }).then(doc => {
          console.log("From database", doc);

          if (doc != null && doc.length > 0) {

              resultObject[0] = doc;
              resultObject[1] = 200;
              resolve(resultObject);


          } else {
              resultObject[0] = "";
              resultObject[1] = 400;
              reject(resultObject);
          }
      }).catch(err => {
          resultObject[0] = "";
          resultObject[1] = 404;
          console.log(err);
          reject(resultObject);
      });

  });
};


/**
 * Update an existing pet
 * 
 *
 * body Pet Pet object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.updatePet = function(body) {
  return new Promise(function(resolve, reject) {

      var resultObject = [];
      Pet.update({id : body.id}, { "$set": body }).exec().then(result => {
          console.log("From database", result);

          if (result != null && result.nModified === 1 ) {

              resultObject[0] = result;
              resultObject[1] = 200;
              resolve(resultObject);


          } else {
              resultObject[1] = 400;
              reject(resultObject);
          }
      }).catch(err => {
          resultObject[0] = "";
          resultObject[1] = 404;
          console.log(err);
          reject(resultObject);
      });



  });
};


/**
 * Updates a pet in the store with form data
 * 
 *
 * petId Long ID of pet that needs to be updated
 * name String Updated name of the pet (optional)
 * status String Updated status of the pet (optional)
 * no response value expected for this operation
 **/
exports.updatePetWithForm = function(petId,name,status) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
};


/**
 * uploads an image
 * 
 *
 * petId Long ID of pet to update
 * additionalMetadata String Additional data to pass to server (optional)
 * file File file to upload (optional)
 * returns ApiResponse
 **/
exports.uploadFile = function(petId,additionalMetadata,file) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "type" : "type",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};






