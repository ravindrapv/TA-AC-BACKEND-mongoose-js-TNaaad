var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/blogApp',(err) => {
  console.log("now its connected to database");
})

app.use(express.json());

app.get('/',(req,res) => {
    res.send('welcome');
});


app.listen(3000,() => {
    console.log("server is listing on port");
});