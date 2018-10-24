// going through Node.js tutorial on W3C
//code comes from this link - https://www.w3schools.com/nodejs/nodejs_get_started.asp

var http = require('http');  // require module takes in the inbuilt http module of node library

var dt = require('./w3module'); // taking the output from w3module.js
let url = require('url');

http.createServer(function (req, res) {
  // createServer method creates the http server
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime()); // write the response
    res.write("\n Hello ji, kaise hain aap !") // why newline not working ?
    //res.write (req.url);  //puts the URL on screen for eg; /summer  
    let ab = url.parse(req.url,true).query;
    /*Return the year and month from the query object:*/
    let abc = ab.year+" "+ab.month;
    //res.write(abc);
    res.end(abc);// end the response
}).listen(8080);
