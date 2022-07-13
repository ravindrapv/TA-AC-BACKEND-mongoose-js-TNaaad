var mongoose = require('mongoose');
var Schema = new mongoose.Schema;

var userSchema = new Schema({
    name: {type:String},
    email:{type:String,lowercase:true},
    age:{type:Number, default:0},
    password:{type:String,minlength:5,maxlength:15},
    favourites:[{type:String}]
}) 


module.exports = mongoose.model('User',userSchema);