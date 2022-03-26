let dayBirth = (date, month, year) => {
  let days = 31 - date;
  let months = 12 - month;
  let years = 2022 - year;
  return days + dayInMonth(months) + dayInYear(years);
};
let dayInYear = (years) => years * 31 * 12;
let dayInMonth = (months) => months * 31;
