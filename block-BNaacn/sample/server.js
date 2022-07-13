var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var Schema = new mongoose.Schema;
var cookiParser = require('cookie-parser');
var app = express();
app.use(cookiParser());
app.use(logger('dev'));

mongoose.connect('mongodb://localhost/sample',(err) => {
    console.log("database connected");
});

var Artical = new Schema({
    titel:String,
    description:String,
    tag:[String],
    date: new date()
});

var userSchema = new Schema({
    name: {type:String},
    email:{type:String,lowercase:true},
    age:{type:Number, default:0}
}) 

app.get('/',(req,res) => {
    res.send('now the mongo database is connected');
});

app.listen(3000,() => {
    console.log("the port is listing");
});