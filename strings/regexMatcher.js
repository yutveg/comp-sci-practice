var cache = {};

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  var sIndex = 0;

  for (var pIndex = 0; pIndex < p.length && sIndex < s.length; pIndex++) {
    var isWildCard = p.charAt(pIndex) === ".";
    var isRepeatable = pIndex + 1 < p.length && p.charAt(pIndex + 1) === "*";

    //if it's a regular character, and doesn't match, we have a mismatch!
    if (!isRepeatable && !isWildCard && p.charAt(pIndex) !== s.charAt(sIndex)) {
      return false;
    }

    if (isRepeatable) {
      var count = getMaxRepeatCount(s, p.charAt(pIndex), sIndex, isWildCard);

      //letter* can repeat from 0 to count times
      for (var i = 0; i <= count; i++) {
        var newS = s.substring(sIndex + i);
        var newP = p.substring(pIndex + 2);

        // if we've exhausted both strings, return true
        if (newS.length === 0 && newP.length === 0) return true;

        if (cache[newS] === undefined) {
          cache[newS] = {};
        }

        if (cache[newS][newP] === undefined) {
          cache[newS][newP] = isMatch(newS, newP);
        }

        //if the new strings are a match, return true
        if (cache[newS][newP]) return true;
      }

      //if we've exhausted all possible permutations, there is no match
      return false;
    } else {
      sIndex++;
    }
  }

  return (
    sIndex === s.length &&
    (pIndex === p.length || leftoverReducesToZero(p, pIndex))
  );
};

//how many possible repeats are there?
var getMaxRepeatCount = function (s, char, sIndex, isWildCard) {
  if (isWildCard) {
    return s.length - sIndex;
  } else {
    var count = 0;
    while (s.charAt(sIndex + count) === char) {
      count++;
    }

    return count;
  }
};

//if p has leftovers, but they could reduce to an empty string, we're also good for a match
var leftoverReducesToZero = function (p, pIndex) {
  while (pIndex < p.length) {
    //if there is no next character, or it's not a repeater, then we're done,
    if (pIndex + 1 > p.length || p.charAt(pIndex + 1) !== "*") {
      return false;
    }

    pIndex += 2; //skip by two
  }

  return true;
};

console.log(isMatch("aabbcc", "a*ab*c*"));
