var myAtoi = function (str) {
  // one pass solution:
  // loop through string, if we hit a negative then we set our sign var to negative
  // otherwise, concat onto finalString variable
  // if we hit whitespace and finalString var length > 0 return our num

  let stringNumber = "";

  for (let i = 0; i < str.length; i++) {
    // we hit a negative sign before our number has been set
    if (str[i] === "-" && stringNumber.length === 0) {
      stringNumber = stringNumber.concat(str[i]);
    }

    // we hit a number
    else if (isNaN(str[i]) === false) {
      stringNumber = stringNumber.concat(str[i]);
    }

    // we hit a letter before hitting a number
    else if (isNaN(str[i]) === true && stringNumber.length === 0) {
      break;
    }
    // we hit a whitespace/letter after retrieving our number
    if (
      (isNaN(str[i]) === true && stringNumber.length > 0) ||
      (str[i] === " " && stringNumber.length > 0)
    ) {
      break;
    }
  }

  // if conversion couldn't happen
  if (stringNumber === "" || stringNumber === "-") {
    return 0;
  }

  // if we can convert
  else {
    return parseInt(stringNumber, 10);
  }
};

console.log(myAtoi("   -42"));
