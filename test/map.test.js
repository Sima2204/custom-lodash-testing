const map = require('../src/map');

describe("map", () => {
  it("should throw an error if the first argument is not an array", () => {
    const input = 'abc';
    const iteratee = x => x * 2;
    expect(() => map(input, iteratee)).toThrowError("First argument must be an array");
  });

  it("should throw an error if the second argument is not a function", () => {
    const input = [1, 2, 3];
    const iteratee = "not a function";
    expect(() => map(input, iteratee)).toThrowError("Second argument must be a function");
  });

  it("should return a new array with the results of running each element in the original array through the iteratee", () => {
    const input = [1, 2, 3];
    const iteratee = x => x * 2;
    const expectedOutput = [2, 4, 6];
    expect(map(input, iteratee)).toEqual(expectedOutput);
  });

  it("should return an empty array if first argument is an empty array or an empty object", () => {
    const input1 = [];
    const iteratee1 = x => x * 2;
    const expectedOutput1 = [];
    expect(map(input1, iteratee1)).toEqual(expectedOutput1);
    const input2 = {};
    const iteratee2 = x => x * 2;
    const expectedOutput2 = [];
    expect(map(input2, iteratee2)).toEqual(expectedOutput2);
  });
});