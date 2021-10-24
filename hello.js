// var name = "paru";
// var n1 = new String("parvathy");
// console.log(n1.length);
// console.log(name.length);
// var age = 21;
// console.log("heiii " + name + " age " + age);
// var read = require("readline-sync");
// val = read.question("enter num");
// console.log(val);
// var u = require("upper-case");
// var uc = u.upperCase("parvathy");
// console.log(uc);
var http = require("http");
var fs = require("fs");
http.createServer(server).listen(7000);
function server(req, res) {
  fs.readFile("sample.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
}
