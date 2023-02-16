const zip = require('../src/zip');

describe("zip", () => {
  it("should throw an error if arguments are not arrays", () => {
    expect(() => zip('abc')).toThrowError("All arguments must be arrays");
  });

  it("zips arrays of the same length", () => {
    const a = [1, 2, 3];
    const b = [4, 5, 6];
    const expected = [[1, 4], [2, 5], [3, 6]];
    expect(zip(a, b)).toEqual(expected);
  });

  it("zips arrays of different lengths", () => {
    const a1 = [1, 2, 3];
    const b1 = [4, 5];
    const expected1 = [[1, 4], [2, 5], [3, undefined]];
    expect(zip(a1, b1)).toEqual(expected1);
    const a2 = [1];
    const b2 = [2, 3, 4, 5];
    const expected2 = [[1, 2], [undefined, 3], [undefined, 4], [undefined, 5]];
    expect(zip(a2, b2)).toEqual(expected2);
  });

  it("zips arrays of different lengths with undefined values", () => {
    const a = [1, 2, 3];
    const b = [4];
    const expected = [[1, 4], [2, undefined], [3, undefined]];
    expect(zip(a, b)).toEqual(expected);
  });
});