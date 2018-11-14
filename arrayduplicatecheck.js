// to check if there are duplicate integers in an array , if yes then return the num of
// duplicate sets , for eg 1,1,1  is one set of duplicate, 43,43 is another set of duplicates

function arrayinput(arrayinput1) {  // arrayinput1 is the main array input
  let sidearray=[]; // array to store values in the side
  let dupcountarray=[]; // this array will store the duplicates
  let duparraylength=0;
  for (let i=0 ; i < arrayinput1.length ; i++ ) {
  //console.log(arrayinput1[i]);
  sidearray[i]=arrayinput1[i];
  //console.log(i);
for (let x=1; x<=i; x++) {  //this loop to start from second element hence x=1
  if (arrayinput1[i]===sidearray[i-x])
  {
    //console.log("ab aaya duplicate"+arrayinput1[i]);

  //if(  (arrayinput1[i] in dupcountarray)===false  )
  let doodoo= dupcountarray.indexOf(arrayinput1[i])
  if (doodoo===-1)
  {
    //console.log("push hone waala hain"+arrayinput1[i])
   dupcountarray.push(arrayinput1[i]);
    //console.log('this is dupcountarray'+dupcountarray);
   }
   }
 }
}

  //console.log("duplicate");
  //console.log ("pushed value is "+ arrayinput1[i]);
  console.log('the number of duplicates are'+dupcountarray.length);
  console.log("the integers that are duplicated are"+dupcountarray);

}


let readconsolewa = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
readconsolewa.question(`Input the array,separate the integers with comma`, (arrayip) =>
{ // input using comma
  console.log(`The array input is ${arrayip}`);
  let a= arrayip.split(',');  // converting input to array
  readconsolewa.close();
  //let a=[];
  console.log(a); //printing the input array
  /*console.log('bakchodi');
  let b=[45,50];
  console.log(b);
  console.log(b.length);*/
  arrayinput(a);  //calling this function to do the processing of checking duplicates
    }
  );
