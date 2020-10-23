/* 
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/

var letterCombinations = function (digits) {
  let lookup = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let solutionArray = [];

  for (let digit of digits) {
    // touch each letter
    // retrieve all combos from that letter
    // push into solutions array
    let currentLetter;

    for (let i = 0; i < lookup[digit].length; i++) {
      currentLetter = lookup[digit][i];

      solutionArray.push(currentLetter);
    }
  }

  return solutionArray;
};

console.log(letterCombinations("23"));
