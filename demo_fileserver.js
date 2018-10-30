// this code will act like a demo fileserver , opens the requested file which
//is saved in the same directory - in this case keto.html and fasting.html
//returns the content to the client. If anything goes wrong, throw a 404 error
let httpka = require ('http');
let urlka = require ('url');
let fska = require ('fs');

httpka.createServer(function(requestwa,resultwa){ //dekho fun takes 2 inputs
  let ab = urlka.parse(requestwa.url,true);//note this shouldnot be req.urlka
  let bc = "."+ab.pathname; // why this file name has dot in beginning -
  //in the same directory -   ./filename
  console.log(bc);
  fska.readFile(bc,function(errorwa,datawa){ // look at the arguments
    if (errorwa){
      resultwa.writeHead(404,{'Content-Type': 'text/html'});
      return resultwa.end ('404 Not Found');
      }
    resultwa.writeHead(200, {'Content-Type':'text/html'});
    resultwa.write(datawa);
    return resultwa.end();
  });
}).listen(8080);

//to run try -  localhost:8080/keto.html at browser
