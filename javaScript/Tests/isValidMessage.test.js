const isAValidMessage = require('../Solutions/isValidMessage');

test('Basic case', () => {
  expect(isAValidMessage("3hey5hello2hi")).toBe(true);
});

test('Long word', () => {
  expect(isAValidMessage("4code13hellocodewars")).toBe(true);
});

test('Number not followed by any letters', () => {
  expect(isAValidMessage("3hey5hello2hi5")).toBe(false);
});

test('Word not proceded by a number', () => {
  expect(isAValidMessage("code4hello5")).toBe(false);
});

test('Not words should still pass', () => {
  expect(isAValidMessage("1a2bb3ccc4dddd5eeeee")).toBe(true);
});


"1a2bb3ccc4dddd5eeeee" // true

"" // true