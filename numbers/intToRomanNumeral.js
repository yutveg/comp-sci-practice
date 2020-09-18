function intToRoman(num) {
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  return Object.entries(map).reduce((result, [letter, n]) => {
    // this line takes our result value and concatenates letter however many times n goes into num
    // in the case of 1000, result = "M"
    result += letter.repeat(Math.floor(num / n));
    // this line does some kind of magic
    num %= n;
    return result;
  }, "");
}
