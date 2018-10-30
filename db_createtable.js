// trying to create a table in mysql via JavaScript
let mysqlserverdb = require('mysql');
let connection=mysqlserverdb.createConnection({
  host:'localhost',
  user:'root',
  password:'neharani',
  database:'shanivar_db'
}) ;
connection.connect(function(errorwa){
  if (errorwa) throw errorwa;
  console.log("Connected to the Mysql database server");
  let sql = "Create Table booknauthors (bookname varchar(255),author varchar(255))";
  connection.query(sql, function(galti, parninam){
    if (galti) throw galti;
    console.log ("Tablewa create ho gayil");
  });
});
