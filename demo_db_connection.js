//installed mysql db in ubuntu , now trying to connect to it via JavaScript
//at the end of this code we create a dummy database 
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "neharani"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //below we are creating a database
  con.query("CREATE DATABASE shanivar_db", function (err, result) {
   if (err) throw err;
   console.log("Database created");
 });
});
