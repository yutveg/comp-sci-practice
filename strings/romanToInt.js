// retroactive correction

function romanNumeralToInteger(s) {
  if (s.length < 1) return null;

  let valueLookUp = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let integerValue = 0;

  let previousCharacter = s[0];

  for (let i = 0; i < s.length; i++) {
    let currentCharacter = s[i];
    // keep a current and previous character
    // if previous is less than current, add the difference to integerValue
    if (valueLookUp[currentCharacter] > valueLookUp[previousCharacter]) {
      let difference =
        valueLookUp[currentCharacter] - valueLookUp[previousCharacter];
      integerValue -= valueLookUp[previousCharacter];
      integerValue += difference;
    }
    // otherwise, add to integerValue
    else {
      integerValue += valueLookUp[currentCharacter];
    }
    previousCharacter = currentCharacter;
  }

  return integerValue;
}

// proactive adjustments
function romanNumeralToInteger2(s) {
  if (s.length < 1) return null;

  let valueLookUp = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // lookahead type of way
  // keep a current, and a lookahead character
  // if current is less than lookahead, add difference to integer value
  // if current is >= lookahead, add current to integer value
  //

  let integerValue = 0;

  for (let i = 0; i < s.length; i++) {
    let currentValue = valueLookUp[s[i]];
    let lookaheadValue = valueLookUp[s[i + 1]];

    // have we found a subtraction pair?
    if (lookaheadValue && currentValue < lookaheadValue) {
      integerValue += lookaheadValue - currentValue;
      i++;
    }
    // we have not found a subtraction pair
    else {
      integerValue += currentValue;
    }
  }

  return integerValue;
}

const romanToInt = (s) => {
  if (!s || s.length === 0) {
    return 0;
  }

  const map = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let i = s.length - 1;
  let result = map.get(s[i]);

  while (i > 0) {
    const curr = map.get(s[i]);
    const prev = map.get(s[i - 1]);

    if (prev >= curr) {
      result += prev;
    } else {
      result -= prev;
    }

    i--;
  }

  return result;
};
