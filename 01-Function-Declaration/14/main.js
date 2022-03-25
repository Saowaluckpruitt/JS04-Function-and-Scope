function max(a, b, c, d) {
  if (!isNumber(a) || !isNumber(b) || !isNumber(c) || !isNumber(d)) {
    return NaN;
  }
  if (a == undefined) {
    return;
  } else if (b == undefined) {
    return a;
  } else if (c == undefined) {
    return Math.max(a, b);
  } else if (d == undefined) {
    return Math.max(a, b, c);
  } else {
    return Math.max(a, b, c, d);
  }
}

function isNumber(num) {
  return typeof num == "number" || num == undefined;
}
