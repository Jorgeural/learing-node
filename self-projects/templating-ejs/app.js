const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.sendFile(__dirname + "/home.html");
});

app.get("/contact", function(req, res){
  res.sendFile(__dirname + "/contact.html");
});

app.get("/profile/:name", function(req, res){
  //imagine you query a data base and get some infp
  var data = {age: 28, city: "Madrid", hobbies: ["html", "css", "JS"]};
  res.render("profile", {person: req.params.name, data: data});
});

app.listen(3000);
