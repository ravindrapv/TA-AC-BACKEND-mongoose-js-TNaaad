var express = require('express');
var logger = require('morgan');
var cookieParse = require('cookie-parser');
const { urlencoded } = require('express');

var app = express();

app.use(cookieParse());
app.use(logger,('dev'));
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res) => {
    res.send("mongoose data base is connected this is a validation assignment");
});

app.listen(3000,() => {
    console.log("the port is listing on 3000");
})