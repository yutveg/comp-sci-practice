// given a string and a number or rows
// return a string that is created by converting the original string into a zig zac pattern
// and concating from the top down

// example:

// given the string "PAYPALISHIRING" and rowCount = 3

// return PAHNAPLSIIGYIR

// v-- index 0
// P   A   H   N
// A P L S I I G <-- end of string
// Y   I   R

// one solution: keep an index 1-row count
// insert chars onto string into dictionary with row # as key
// at end of algo
// iterate through the dictionary keys and concat all strings together

var convert = function (s, numRows) {};
