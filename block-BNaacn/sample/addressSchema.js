var mongoose = require('mongoose');
var Schema = new mongoose.Schema;

// village -> String
// - city -> String
// - state -> String
// - pin -> number
// - user -> ObjectId of User from user schema

var addresSchema = new Schema({
    village: {type:String},
    city:{type:String,required:true},
    state:{type:String,required:true},
    pin:{type:Number},
    user:{Schema:type.ObjectId}
});
module.exports = mongoose.model('Addres',addresSchema);