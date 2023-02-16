const toPairs = require('../src/toPairs');

describe("toPairs", () => {
  it("should return an array of key-value pairs", () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(toPairs(obj)).toEqual([["a", 1], ["b", 2], ["c", 3]]);
  });

  it("should return an empty array if the input object is empty", () => {
    expect(toPairs({})).toEqual([]);
  });

  it("should return an array of length 1 if the input object has only one property", () => {
    expect(toPairs({ a: 1 })).toEqual([["a", 1]]);
  });
});