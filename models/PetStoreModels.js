/**
 * this is a JSON schema for the PetModel
 */
//Require Mongoose
const mongoose = require('mongoose');
const petSchema = mongoose.Schema({

        "id": {
            "type": "number"
        },
        "status": {
            "type": "string",
            "description": "pet status in the store",
            "enum": ["available", "pending", "sold"]
        },
        "name": {
            "type": "string"
        },
        "category": {
            "type": "array"
        },
        "tags": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "visits": {
            "type": "array",
            "items": {
                "type": "date"
            }
        },
        "photoUrls": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }



});



module.exports = mongoose.model('PetModel', petSchema, 'Pet');
/**
 * this is a JSON schema for the UserModel
 */
//
// exports.user = {
//     "id": "user",
//     "properties" : {
//         "id" : {
//             "type" : "long"
//         },
//         "name" : {
//             "regex": /^[a-z0-9_-]{4,24}$/,
//             "type" : "string"
//         },
//         "mail" : {
//             "regex": /^([a-zA-Z0-9_\.\-\~\#])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
//             "type" : "string"
//         }
//     }
// };
