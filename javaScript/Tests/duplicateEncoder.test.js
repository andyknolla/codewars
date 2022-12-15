const duplicateEncoder = require('../Solutions/duplicateEncoder');

describe("Duplicate Encoder", () => {
  test("Testing for fixed tests", () => {
    expect(duplicateEncoder("din")).toBe("(((");
    expect(duplicateEncoder("recede")).toBe("()()()");
    expect(duplicateEncoder("Success")).toBe(")())())","should ignore case");
    expect(duplicateEncoder("(( @")).toBe("))((");
  });
});