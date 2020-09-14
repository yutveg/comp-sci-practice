// given a string and a number or rows
// return a string that is created by converting the original string into a zig zac pattern
// and concating from the top down

// example:

// given the string "PAYPALISHIRING" and rowCount = 3

// return PAHNAPLSIIGYIR

// v-- row 1 and index 0 of string
// P   A   H   N
// A P L S I I G <-- end of string
// Y   I   R

// one solution: keep an index 1-row count
// insert chars onto string into dictionary with row # as key
// at end of algo
// iterate through the dictionary keys and concat all strings together

var convert = function (s, numRows) {
  // Initializing the dictionary we will store our rowNumber + stringValues
  let rowsAndString = {};
  let convertedString = "";
  let rowIndex = 1;
  let indexer = 1;

  // Loop through the string and insert into our dictionary
  for (let i = 0; i < s.length; i++) {
    // initializing entry into dictionary, OR concatting existing entry
    rowsAndString[rowIndex]
      ? (rowsAndString[rowIndex] = rowsAndString[rowIndex].concat(s[i]))
      : (rowsAndString[rowIndex] = s[i]);

    // if at end of row, start decrementing
    if (rowIndex === numRows) {
      indexer = -1;
    }
    // if at start of row, start incrementing
    else if (rowIndex === 1) {
      indexer = 1;
    }

    rowIndex += indexer;
  }

  // Loop through numRows and concat final string
  for (let i = 1; i <= numRows; i++) {
    if (rowsAndString[i]) {
      convertedString = convertedString.concat(rowsAndString[i]);
    }
  }

  return convertedString;
};

console.log(convert("PAYPALISHIRING", 3));
