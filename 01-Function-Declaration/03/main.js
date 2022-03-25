// let message = "Welcome to Thailand";

// function logMessage(message) {
//   message = "Hello everybody";
//   console.log(message); // *  "Hello everybody" coz  message set to "Hello everybody"
// }

// logMessage(message);
// console.log(message); // ** "Welcome to Thailand" coz it is log from message variable
// // ```

// ```js
let name = "John";

function sayHi(input) {
  console.log(name); // *** John coz log call name variable
  name = input;
}

sayHi();
console.log(name); // ****  undefined  coz funtion  sayHi was pass input as undefined and name will change to value input(undefined) so sayHi()=undefined and when log name = undefined
