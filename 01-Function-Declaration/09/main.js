function primeNumber(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
function primes(num1) {
  for (let i = 2; i <= num1; i++) {
    if (primeNumber(i)) {
      console.log(i);
    }
  }
}
primes(3);
