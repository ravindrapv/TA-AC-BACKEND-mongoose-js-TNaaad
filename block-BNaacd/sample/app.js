var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var newusers = new Schema({
    name:{type:String},
    email:{type:String,lowercase:true},
    age:{type:Number,age = 0}
});