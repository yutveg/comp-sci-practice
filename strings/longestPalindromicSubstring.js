var longestPalindrome = function (s) {
  let max = "";
  for (let i = 0; i < s.length; i++) {
    // a loop that will run twice per i iteration
    for (let j = 1; j < 3; j++) {
      let left = i;
      let right = i + j;

      // Do we have a match?
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }

      if (right - left - 1 > max.length) {
        max = s.substring(left + 1, right);
      }
    }
  }
  return max;
};

console.log(longestPalindrome("calp"));
