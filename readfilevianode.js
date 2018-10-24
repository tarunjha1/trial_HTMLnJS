// here trying to read from an html file and show it at the localhost at a port
let Navami=require('http');
let VijayaDashmi= require('fs'); //file system module in Node.js

Navami.createServer(function(req,res){
  VijayaDashmi.readFile('palicheck.html',function(err,data){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    res.end();
  })
}).listen(8124);
