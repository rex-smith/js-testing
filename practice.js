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

// function caesarCipher(string, shift) {
//   // Needs to work with punctuation, uppercase/lowercase, and reverse shifts
//   let newString;
//   return newString;
// }

// function analyzeArray(array) {

//   let arrayObject = {
//     average:
//     min:
//     max:
//     length:
//   }
//   return arrayObject;
// }

// module.exports = {
//   capitalize,
//   reverseString,
//   calculator,
//   caesarCipher,
//   analyzeArray
// }

export { capitalize, reverseString, calculator };
