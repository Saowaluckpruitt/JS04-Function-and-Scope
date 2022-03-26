let point = (a, b) => {
  if (a > b) {
    return 3;
  } else if (a == b) {
    return 1;
  } else {
    return 0;
  }
};
console.log(point(3, 3));
console.log(point(1, 3));
console.log(point(4, 3));
