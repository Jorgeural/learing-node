const express = require("express");

const app = express();

app.get("/", function(req, res){
  res.send("this is the home page");
});

app.get("/contact", function(req ,res){
  res.send("this is the contact page")
});

//Using params
app.get("/profile/:id", function(req, res){
  res.send("You requested to see profile with the id: " + req.params.id)
})

app.listen(3000);
