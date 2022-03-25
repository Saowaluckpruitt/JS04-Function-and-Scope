function sayHi(age) {
  if (age < 12) alert("Hi kid");
}
console.log(sayHi); // * log function
console.log(sayHi(10)); // ** undefined]

function sayHi(name) {
  if (name) {
    alert("Hi " + name);
    return;
  } else {
    return "Who are you";
  }
}
console.log(sayHi("John")); // *** undefined coz return undefined
console.log(sayHi()); // **** who are you coz function sayHi no argument
