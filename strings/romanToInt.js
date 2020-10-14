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
