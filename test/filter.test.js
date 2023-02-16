const filter = require('../src/filter');

describe('filter', () => {
  it('should throw an error if the first argument is not an array', () => {
    expect(() => filter('abc')).toThrowError('First argument must be an array');
    expect(() => filter(123)).toThrowError('First argument must be an array');
  });

  it('should throw an error if the second argument is not a function', () => {
    expect(() => filter([], 'not a function')).toThrowError('Second argument must be a function');
    expect(() => filter({})).toThrowError('Second argument must be a function');
  });

  it('should return an array of elements that pass the test implemented by the provided function', () => {
    const arr1 = [1, 2, 3, 4, 5, 6];
    const fn1 = x => x % 2 === 0;
    expect(filter(arr1, fn1)).toEqual([2, 4, 6]);
    const arr2 = {};
    const fn2 = x => x > 0;
    expect(filter(arr2, fn2)).toEqual([]);
  });

  it("should return an empty array if all elements do not pass the test", () => {
    const arr = [1, 3, 5, 7, 9];
    const isEven = num => num % 2 === 0;
    expect(filter(arr, isEven)).toEqual([]);
  });
});