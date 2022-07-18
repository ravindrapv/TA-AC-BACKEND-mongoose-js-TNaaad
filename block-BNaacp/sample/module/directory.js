var express = require('express');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String},
    sports:{type:String,required:true}
});


var Sports = mongoose.model('Sports',userSchema);

sports = module.exports
