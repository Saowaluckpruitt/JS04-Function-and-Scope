let leepYear = (year) => {
  if (year % 4 == 0) {
    return year % 100 != 0; //true ->this mean leep year
  }
  return false; //!leep years
};
