//first installed package -  npm install upper-case
// many other packages at https://www.npmjs.com
let ucase = require ('upper-case');  // package upper-case has been imported locally already
let serverwa = require('http');

serverwa.createServer(function(a,b){  // a is input , b is output
  b.writeHead(200, {'Content-Type':'text/html'});
  b.write(ucase("hello ji , namaskar"));// we used the imported pkg here to print in upper case 
  b.end();
}).listen(8081); // on this port listening will be done and once there is
//some activity the webserver so to speak will be initiated
