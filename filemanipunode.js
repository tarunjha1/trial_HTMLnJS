// using node.js to manipulate files
let jaiho=require('fs'); // get the module fs for filesystem

//you can change the file names completely while trying

//appendFile appends to a file , creates a new file if the file does not exist
//jaiho.appendFile("nabkafile1.txt", "Ka ho!",function (err){
  //if (err) throw err;
  //console.log("File ban gaya!");
//});

// open - well opens file
//jaiho.open("nabkafile1.txt","w",function (err,file){
  //if (err) throw err ;
  //console.log("bahut badhiya");
//});

// writeFile writes to a file , if file does not exist then it creates, it also
//replaces previous content while writing to a file
//jaiho.writeFile("nabkafile.txt","Happy Dusshera!",function(err){
  //if (err) throw err;
  //console.log("Bhery nice");
//});

//unLink method deletes a file
//jaiho.unlink("nabkafile1.txt", function(err){
  //if (err) throw err;
  //console.log("filewa delete ho gaya");
//});

// rename method renames the file
//jaiho.rename('nabkafile2.txt','nabkafile3.txt',function(err){
//  if (err) throw err;
  //console.log("naam badal gaya");
//});
