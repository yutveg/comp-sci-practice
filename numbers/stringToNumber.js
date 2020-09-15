var myAtoi = function (str) {
  // one pass solution:
  // loop through string, if we hit a negative then we set our sign var to negative
  // otherwise, concat onto finalString variable
  // if we hit whitespace and finalString var length > 0 return our num

  let stringNumber = "";

  for (let i = 0; i < str.length; i++) {
    // we hit a negative/positive sign before our number has been set
    if (
      (str[i] === "+" && stringNumber.length === 0) ||
      (str[i] === "-" && stringNumber.length === 0)
    ) {
      stringNumber = stringNumber.concat(str[i]);
    }

    // we hit a number
    else if (Number.isNaN(parseInt(str[i], 10)) === false) {
      stringNumber = stringNumber.concat(str[i]);
    }

    // we hit a letter before hitting a number
    else if (
      str[i] !== " " &&
      Number.isNaN(parseInt(str[i], 10)) === true &&
      stringNumber.length === 0
    ) {
      break;
    }
    // we hit a whitespace/letter after retrieving our number
    else if (
      (Number.isNaN(parseInt(str[i], 10)) === true &&
        stringNumber.length > 0) ||
      (str[i] === " " && stringNumber.length > 0)
    ) {
      break;
    }
  }

  // if conversion couldn't happen
  if (stringNumber === "" || stringNumber === "-" || stringNumber === "+") {
    return 0;
  }

  // if we can convert
  else {
    let finalNum = parseInt(stringNumber, 10);
    if (finalNum >= 2147483647) {
      return 2147483647;
    } else if (finalNum <= -2147483648) {
      return -2147483648;
    }

    return finalNum;
  }
};

var myAtoi2 = function (str) {
  const MIN_VALUE = Math.pow(-2, 31);
  const MAX_VALUE = Math.pow(2, 31) - 1;
  const result = Number(str.trimLeft().match(/^[-\+]?\d+/));
  if (result < MIN_VALUE) return MIN_VALUE;
  if (result > MAX_VALUE) return MAX_VALUE;
  return result;
};

module.exports = {
  myAtoi: myAtoi,
  myAtoi2: myAtoi2,
};
