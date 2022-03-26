let primeNumber = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false; // this return !primenumber
    }
  }
  return true;
};
console.log(primeNumber(5));
