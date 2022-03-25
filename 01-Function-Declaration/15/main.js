function magic() {
  return function (x) {
    return x * 42;
  };
}
const answer = magic();
console.log(answer); // * function coz return magic
console.log(answer(1337)); // ** 56,154 COZ call function 1337
console.log(magic(1337)(42)); // *** 1764
