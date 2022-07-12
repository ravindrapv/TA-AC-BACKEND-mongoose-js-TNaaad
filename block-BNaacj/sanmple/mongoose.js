var mongoose = require('mongoose');

var userSchema =  mongoose.Schema;

var userData = new Schema({
    name: {type:String,required:true},
    age: {type:Number,default:18},
    email:{type:String,lowercase:true,trime:true},
    password:{type:String,minlength:5,maxlength:15}
})