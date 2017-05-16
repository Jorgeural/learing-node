const express = require("express");

const app = express();

//set the view engine ejs
app.set("view engine", "ejs");

//middelware fot every request made (for styles in this case) static files
app.use("/css", express.static("css"));

//get requestss
app.get("/", function(req, res){
  res.render("home");
});

app.get("/contact", function(req, res){
  res.render("contact");
});

//pass a parameter (name) access it using req.params
app.get("/profile/:name", function(req, res){
  //imagine you query a data base and get some info and pass it as data to be used in the views
  var data = {age: 28, city: "Madrid", hobbies: ["html", "css", "JS"]};
  res.render("profile", {person: req.params.name, data: data});
});

app.listen(3000);
