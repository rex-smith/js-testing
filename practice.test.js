import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./practice.js";

// Capitalize Tests

test("capitalizes all lowercase string", () => {
  expect(capitalize("apple")).toBe("Apple");
});

test("capitalizes all uppercase string", () => {
  expect(capitalize("PEAR")).toBe("Pear");
});

test("capitalizes mixed case string", () => {
  expect(capitalize("juMaNji")).toBe("Jumanji");
});

test("capitalizes string with spaces", () => {
  expect(capitalize("boots with the fur")).toBe("Boots with the fur");
});

test("capitalizes string with numbers", () => {
  expect(capitalize("there were 4 of us")).toBe("There were 4 of us");
});

test("capitalizes string with punctuation", () => {
  expect(capitalize("let's eat! Now!")).toBe("Let's eat! now!");
});

// Reverse String Tests

test("reverses string all lowercase", () => {
  expect(reverseString("apple")).toBe("elppa");
});

test("reverses string all uppercase", () => {
  expect(reverseString("PEAR")).toBe("RAEP");
});

test("reverses string mixed case", () => {
  expect(reverseString("juMaNji")).toBe("ijNaMuj");
});

test("reverses string with spaces", () => {
  expect(reverseString("boots with the fur")).toBe("ruf eht htiw stoob");
});

test("reverses string with numbers", () => {
  expect(reverseString("there were 4 of us")).toBe("su fo 4 erew ereht");
});

test("reverses string with punctuation", () => {
  expect(reverseString("let's eat! Now!")).toBe("!woN !tae s'tel");
});

// Calculator tests

test("adds together two positive numbers", () => {
  expect(calculator.add(3, 6)).toBe(9);
});

test("adds together a positive and negative number", () => {
  expect(calculator.add(4, -2)).toBe(2);
});

test("subtracts a positive from a positive number", () => {
  expect(calculator.subtract(3, 6)).toBe(-3);
});

test("subtracts a negative from a positive number", () => {
  expect(calculator.subtract(4, -2)).toBe(6);
});

test("multiplies a positive by a positive number", () => {
  expect(calculator.multiply(3, 6)).toBe(18);
});

test("multiplies a positive by a negative number", () => {
  expect(calculator.multiply(4, -2)).toBe(-8);
});

test("multiplies a positive by a positive decimal", () => {
  expect(calculator.multiply(4, 0.25)).toBeCloseTo(1);
});

test("multiplies a positive by a positive decimal to end up as a decimal", () => {
  expect(calculator.multiply(3, 0.25)).toBeCloseTo(0.75);
});

test("divides a positive integer by a positive integer", () => {
  expect(calculator.divide(8, 2)).toBeCloseTo(4);
});

test("divides a positive integer by a negative integer", () => {
  expect(calculator.divide(6, -3)).toBeCloseTo(-2);
});

test("divides a negative integer by a positive integer to get a negative decimal", () => {
  expect(calculator.divide(-3, 2)).toBeCloseTo(-1.5);
});

test("divides a positive integer by zero to throw an error", () => {
  expect(() => calculator.divide(6, 0)).toThrow("You cannot divide by 0.");
});

// Caesar Cipher Tests

test("shifts a string of only letters a positive amount lower than 25", () => {
  expect(caesarCipher("iphone", 3)).toBe("lskrqh");
});

test("shifts a string of only letters a negative amount higher than -25", () => {
  expect(caesarCipher("iphone", -3)).toBe("fmelkb");
});

test("shifts a string of only letters a positive amount higher than 25", () => {
  expect(caesarCipher("iphone", 45)).toBe("biahgx");
});

test("shifts a string of only letters a negative amount lower than -25", () => {
  expect(caesarCipher("iphone", -45)).toBe("pwovul");
});

test("shifts a string of letters and spaces a positive amount", () => {
  expect(caesarCipher("heading west today", 12)).toBe("tqmpuzs iqef fapmk");
});

test("shifts a string of letters, numbers, punctuation, and spaces a negative amount", () => {
  expect(caesarCipher("it can't be done 4 times!", -5)).toBe(
    "do xvi'o wz yjiz 4 odhzn!"
  );
});

test("shifts a string of mixed case letters a positive amount", () => {
  expect(caesarCipher("celeBRaTE", 8)).toBe("kmtmJZiBM");
});

test("shifts a string of letters, numbers, punctuation, spaces, and capitalized letters a positive amount", () => {
  expect(caesarCipher("It costs about $499 John!", 9)).toBe(
    "Rc lxbcb jkxdc $499 Sxqw!"
  );
});

// Analyze Array Tests

test("returns avg, min, max, length for array of mixed numbers", () => {
  const obj = analyzeArray([3, 1, 5, 76, 32, 1, 16, 40, -30, 23, -12, 0]);
  expect(obj["average"]).toBeCloseTo(12.916);
  expect(obj["min"]).toBe(-30);
  expect(obj["max"]).toBe(76);
  expect(obj["length"]).toBe(12);
  // expect(analyzeArray([3, 1, 5, 76, 32, 1, 16, 40, -30, 23, -12, 0])).toEqual({
  //   average: 12.91667,
  //   min: -30,
  //   max: 76,
  //   length: 12,
  // });
});

test("returns avg, min, max, length for array of mixed numbers", () => {
  const obj = analyzeArray([0, -20, 40, -10, -5, -5]);
  expect(obj["average"]).toBeCloseTo(0);
  expect(obj["min"]).toBe(-20);
  expect(obj["max"]).toBe(40);
  expect(obj["length"]).toBe(6);
});
