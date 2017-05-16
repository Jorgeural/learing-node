const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//set the view engine ejs
app.set("view engine", "ejs");

//middelware fot every request made (for styles in this case) static files
app.use("/css", express.static("css"));

// parse application/x-www-form-urlencoded
const urlencodedParser =(bodyParser.urlencoded({ extended: false }))

//get requestss
app.get("/", function(req, res){
  res.render("home");
});

//you can access the query string using req.query (query string is the url followed ?dept=Marketing&person=Jorge) it will generate an object {dept: "marketing", person: "Jorge"}
app.get("/contact", function(req, res){
  res.render("contact",{qs: req.query});
});

//Create the post request. whith the body parser we can now access the data using req.body
// (creates an object with the data you can send it to a db or mail. the name of the properties are the names of the form)
app.post("/contact", urlencodedParser, function(req, res){
  console.log(req.body);
  res.render("contact-success",{data: req.body});
});

//pass a parameter (name) access it using req.params
app.get("/profile/:name", function(req, res){
  //imagine you query a data base and get some info and pass it as data to be used in the views
  var data = {age: 28, city: "Madrid", hobbies: ["html", "css", "JS"]};
  res.render("profile", {person: req.params.name, data: data});
});

app.listen(3000);
