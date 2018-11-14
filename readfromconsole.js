//code reads from console and prints out a greeting to console with your name
let readconsolewa = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readconsolewa.question(`What's your name?`, (name) => {
  console.log(`Hi ${name}!`)
  readconsolewa.close()
})
