function capitalize(str) {
  // Split first letter from string -> Capitalize it -> Create new string
  let firstLetter = str[0];
  let remainingString = str.slice(1);
  firstLetter = firstLetter.toUpperCase();
  remainingString = remainingString.toLowerCase();
  let newString = firstLetter + remainingString;
  return newString;
}

function reverseString(string) {
  // Either use reverse or split -> reverse order -> reattach
  let stringArray = string.split("");
  let reverseStringArray = stringArray.reverse();
  let newString = reverseStringArray.join("");
  return newString;
}

const calculator = (() => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => {
    if (b === 0) {
      throw new Error("You cannot divide by 0.");
    } else {
      return a / b;
    }
  };
  return {
    add,
    subtract,
    multiply,
    divide,
  };
})();

function caesarCipher(str, shift) {
  // Build array out of string
  let charArray = str.split("");
  let shiftedCharArray = charArray.map((char) => caesarShift(char, shift));
  let newString = shiftedCharArray.join("");
  return newString;
}

function caesarShift(char, shift) {
  let newChar;
  let code = char.charCodeAt(0);
  let updatedShift = convertShift(shift);
  if (code >= 97 && code <= 122) {
    newChar = charShiftLowercase(char, updatedShift);
  } else if (code >= 65 && code <= 90) {
    newChar = charShiftUppercase(char, updatedShift);
  } else {
    newChar = char;
  }
  return newChar;
}

function convertShift(shift) {
  let remainder = shift % 26;
  if (remainder < 0) {
    remainder = remainder + 26;
  }
  return remainder;
}

function charShiftLowercase(char, shift) {
  let code = char.charCodeAt(0);
  if (code + shift > 122) {
    shift = shift - 26;
  } else if (code + shift < 97) {
    shift = shift + 26;
  }
  return String.fromCharCode(code + shift);
}

function charShiftUppercase(char, shift) {
  let code = char.charCodeAt(0);
  if (code + shift > 90) {
    shift = shift - 26;
  } else if (code + shift < 65) {
    shift = shift + 26;
  }
  return String.fromCharCode(code + shift);
}

function analyzeArray(arr) {
  let sum = arr.reduce((a, b) => a + b);
  let avg;
  if (sum === 0) {
    avg = 0;
  } else {
    avg = sum / arr.length;
  }
  let obj = {
    average: avg,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
  return obj;
}

// module.exports = {
//   capitalize,
//   reverseString,
//   calculator,
//   caesarCipher,
//   analyzeArray
// }

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
