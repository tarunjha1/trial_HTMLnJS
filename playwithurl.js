// to see how we can parse a URL
let kaushambhi=require('url') ;   // getting the url module
//Parse an address with the  url  parse() method, and it will return
//a URL object with each part of the address as properties
// run the code in terminal using $node playwithurl.js
let adress = 'http://localhost:8080/default.htm?year=2018&month=october';
let ab = kaushambhi.parse(adress,true);
console.log(ab.host); // returns "localhost:8080"
console.log(ab.pathname); // returns '/default.htm'
console.log (ab.search); // returns '?year=2018&month=october'

let information = ab.query;
console.log (information); // returns '{ year: '2018', month: 'october' }'
console.log (information.year); // returns '2018'
console.log (information.month);// returns 'october'
