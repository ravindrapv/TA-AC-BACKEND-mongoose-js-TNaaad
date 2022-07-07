var express = require('express')
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

var app = express();

app.use(logger('dev'));
app.use(cookieParser());

mongoose.connect("mongodb://localhost/sample",(err) => {
    console.log("data base connected");
})

app.use('/',(req,res) =>{
    res.send("welcome the mongo db data base is connected now")
});


app.listen(3000,() => {
    console.log("the port is listing on 3000");
})