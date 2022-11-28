const findOdd = require('../Solutions/findOddInt');

test('should find the int which occurs an odd number of times', () => {
  expect(findOdd([0,1,0,1,0])).toBe(0);
});
test('should find the int which occurs an odd number of times', () => {
  expect(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])).toBe(4);
});

test('should find the int which occurs an odd number of times', () => {
  expect(findOdd([7])).toBe(7);
});
test('should find the int which occurs an odd number of times', () => {
  expect(findOdd([1,1,2])).toBe(2);
});