const square = (n) => {
  n ** 2;
};

console.log(square(7)); // * undefined coz  dont have return . it should have return  inside{} or delete{}

const calcCircleArea = (r) => Math.PI * r ** 2;
console.log(calcCircleArea(3)); // **28.24 coz after arrrow function dont have {} that mean it have return .
