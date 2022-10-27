const comp = require('../solutions/areTheyTheSame');

test('[121, 144, 19, 161, 19, 144, 19, 11] and [121, 14641, 20736, 361, 25921, 361, 20736, 361] to be the same', () => {
  expect(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])).toBe(true);
});