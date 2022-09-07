import { capitalize, reverseString, calculator } from "./practice.js";

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
