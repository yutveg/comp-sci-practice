var isMatch = function (s, p) {
  // if s is empty, and our pattern does not allow for empty strings
  if ((s.length === 0 && p !== ".*") || (s.length === 0 && p !== "")) {
    return false;
  }

  // if only p is empty
  else if (p.length === 0) {
    return false;
  }

  // keep track of where we are in our pattern checker
  let patternIndex = 0;

  // we check each character in string against pattern
  for (let i = 0; i < s.length; i++) {
    // Character does not match the current pattern character
    if (s[i] !== p[patternIndex] && p[patternIndex] !== ".") {
      // Are we checking against a zero or more value?
      if (p[patternIndex + 1] !== "*") {
        return false;
      }

      // Check if character matches next available pattern character
      else {
        patternIndex += 2;
        i--;
      }
    }

    // Character matches the current pattern character
    else {
      // Do we need to increment to the next pattern index?
      if (p[patternIndex + 1] !== "*") {
        patternIndex += 1;
      }
    }
  }

  // Did we match the whole pattern string?
  for (; patternIndex < p.length; patternIndex++) {}
};
