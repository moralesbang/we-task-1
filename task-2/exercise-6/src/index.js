const BASE_ROMAN_NUMBERS = {
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

const romanNumerals = (num) => {
  let numCopy = num;
  let result = "";

  for (i in BASE_ROMAN_NUMBERS) {
    while (numCopy >= BASE_ROMAN_NUMBERS[i]) {
      result += i;
      numCopy -= BASE_ROMAN_NUMBERS[i];
    }
  }
  return result;
};

console.log(romanNumerals(6)); //VI
console.log(romanNumerals(76)); //LXXVI
console.log(romanNumerals(13)); //XIII
console.log(romanNumerals(44)); // XLIV
console.log(romanNumerals(3999)); // MMMCMXCIX
