// how to create , listen to , fire and handle events
//Node.js has a built-in module, called "Events", where you can create-, fire-,
//and listen for- your own events.
//To include the built-in Events module use the require() method. In addition,
//all event properties and methods are an instance of an EventEmitter object.
//To be able to access these properties and methods, create an EventEmitter object

let ab = require('events'); //getting inbuilt event module of nodejs
let bc = new ab.EventEmitter(); // bc is the new event

// Create an event handler
let eventwahandlekaro= function() {
  console.log("konchi ka event- kahe aaaaa");
};

//assign the event handler to an event
bc.on('aaaaa', eventwahandlekaro);

//Fire the  event :  // the sequencing is important create handler, assign to an event and then fire it
bc.emit('aaaaa');
