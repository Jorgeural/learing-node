//Load required modules
const express = require("express");
const bodyParser = require("body-parser");
//load our dates.js module
const dates = require("./dates.js");
//Create new express instance and configurations
const app = express();
app.use(bodyParser.json());


app.get("/", function(req, res){
    res.sendFile(__dirname + "/home.html");
});

app.get("/:date", function(req, res){
    //Variable to store the request param
    var date = req.params.date;
    //use our module funciton
    var formated = dates.formatDate(date);
    //send info 
    res.json(formated);
});


//Set wich port to listen
app.listen(8080);