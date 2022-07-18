var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Artical = new Schema({

title: {type:String,required:true},
description:{type:String},
tags:[{type:String}],
author:{type:Number},
comments:{type:String},
},timestamps(true));


var Articals =  Schema('Articals',(Artical));

Artical = module.exports

