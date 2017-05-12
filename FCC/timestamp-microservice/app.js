const http = require("http");
const fs = require("fs");

const dates = require("./dates.js");

function handler (req, res){
    if(req.url === "/" || req.url === "/home"){
        res.writeHead(200, {"Content-Type" : "text/html"}); 
        var homeHtml = fs.createReadStream(__dirname + "/home.html", "utf8");
        homeHtml.pipe(res);
    } else {
        res.end(dates.formatDate(req.url)); 
    }
}

const server = http.createServer(handler);

server.listen(8080, "0.0.0.0");