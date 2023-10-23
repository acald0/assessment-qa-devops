const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('return an array', () => {
    expect(typeof(shuffle([0,4,8]))).toBe("object")
  });

  test('returns array with same length as argument', () => {
    expect(shuffle([0,4,8]).length).toBe(3)
  });

  test('returns same items', () => {
    expect(shuffle([0,4,8])).toContain(0,4,8)
  })
});
