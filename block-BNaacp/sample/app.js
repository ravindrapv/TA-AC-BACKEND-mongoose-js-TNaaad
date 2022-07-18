var express = require('express');
var mongoose = require('mongoose');
var Sport = require('./module/directory'); 

var app = express();

app.use(express.json());

mongoose.connect(
    "mongodb://localhost/sample",{useNewUrlParser:true, useUnifiedTopology:true},
    (err) => {
        console.log(err ? err: "connected to the database");
    }
);

app.get('/',(req,res) => {
    res.send("welcome this will captuer the user data and store in a mongoDB database");
});

app.post('/Sports',(req,res) => {
    console.log(req.body); 
    Sport.create(req.body,(err,sports) => {
        console.log(err,sports);
    });
})


app.listen(3000,() => {
    console.log("server is listing on port 3k");
})