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

var reverse = function (x) {
  let sign = 1;
  if (x < 0) {
    sign = -1;
  }
  let numberString = x.toString();
  let reversedString = "";
  for (let i = numberString.length - 1; i >= 0; i--) {
    reversedString = reversedString.concat(numberString[i]);
  }

  let number = parseInt(reversedString, 10);

  if (number > 2147483647) {
    return 0;
  }
  return number * sign;
};
