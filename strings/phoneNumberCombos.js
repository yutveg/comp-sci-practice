/* 
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/

const letterCombinations = (digits) => {
  if (digits == null || digits.length === 0) return [];

  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  // initializing result array
  const res = [];

  // defining a recursive function
  const go = (i, s) => {
    // if at end of entry length, push to result array and close function
    if (i === digits.length) {
      res.push(s);
      return;
    }
    // for every character in hashmap value
    for (const c of map[digits[i]]) {
      // increment index by 1 and concat s with new char c
      go(i + 1, s + c);
    }
  };

  // invoking function
  go(0, "");

  return res;
};

console.log(letterCombinations("23"));
