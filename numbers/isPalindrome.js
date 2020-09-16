var isPalindrome = function (x) {
  // if our number is negative it cannot be a palindrome due to sign

  // if our number is divisible by ten evenly, and is not zero, cannot be a palindrome
  // e,g; 10, 20, 30, 100, etc
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  // a number we will push the back values of x onto
  let reversedNumber = 0;
  while (x > reversedNumber) {
    // moving previous number up one space to left, then pushing on remainder of x / 10
    // e,g; 123 % 10 === 3, 12 % 10 === 2, so on
    reversedNumber = reversedNumber * 10 + (x % 10);
    // we don't care about decimals so we can truncate them away, don't want to round up and change the value
    x = Math.trunc(x / 10);
  }

  // return if they are equal, or in odd-length case if they are equal after shaving off the ones place value
  return x === reversedNumber || x === Math.trunc(reversedNumber / 10);
};
