var reverse = function (x) {
  // a variable for our sign
  let sign = 1;
  // checking if x is negative
  if (x < 0) {
    sign = -1;
  }
  // reversing with chained methods
  let reversedNumberString = x.toString().split("").reverse().join("");
  // parsing string back into an integer
  let number = parseInt(reversedNumberString, 10);
  // if it is larger than our maximum possible 32 bit value, return 0
  if (number > 2147483647) {
    return 0;
  }

  return number * sign;
};
