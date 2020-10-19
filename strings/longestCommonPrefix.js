/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // takes in an array of strings
  // find longest common prefix

  // if no common prefix return none

  let prefix = "";

  // as we loop we do two things:
  // 1.) we need to add a character to prefix
  // 2.) check that character against other strings
  // -- if same continue
  // -- if conflict stop

  for (let letterIndex = 0; letterIndex < strs[0].length; letterIndex++) {
    // Initialize prefix with first strings letter
    prefix = prefix.concat(strs[0][letterIndex] || "0");

    // Check other strings against next character
    for (let stringIndex = 1; stringIndex < strs.length; stringIndex++) {
      // Did we find a string that does not have this character?
      if (strs[stringIndex][letterIndex] !== prefix[prefix.length - 1]) {
        prefix = prefix.slice(0, prefix.length - 1);
        same = false;
        break;
      }
    }
  }

  return prefix;
};

function longestCommonPrefix(strs) {
  if (!strs.length) return "";

  for (let i = 0; i < strs[0].length; i++) {
    for (let str of strs) {
      if (str[i] !== strs[0][i]) {
        return str.slice(0, i);
      }
    }
  }

  return strs[0];
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
