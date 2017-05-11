var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res){
  console.log(req.url);
  if(req.url === "/" || req.url === "/home") {
    res.writeHead(200, {"Content-Type": "text/html"});
    var readStream = fs.createReadStream(__dirname + "/home.html", "utf8");
    readStream.pipe(res);
  } else if (req.url === "/contact") {
    res.writeHead(200, {"Content-Type": "text/html"});
    var readStream = fs.createReadStream(__dirname + "/contact.html", "utf8");
    readStream.pipe(res);
  } else if (req.url === "/api") {
    res.writeHead(200, {"Content-Type": "application/json"});
    var contents = fs.readFileSync("data.json");
    var jsonContent = JSON.parse(contents);
    res.end(JSON.stringify(jsonContent));
  } else {
    res.end("Sorry page not found");
  }
})

server.listen(3000, "127.0.0.1");
