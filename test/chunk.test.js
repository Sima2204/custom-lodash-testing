const chunk = require('../src/chunk');

describe('chunk', () => {
  it('should throw an error if the first argument is not an array', () => {
    expect(() => chunk(123, 2)).toThrowError('First argument must be an array');
    expect(() => chunk('abc', 2)).toThrowError('First argument must be an array');
    expect(() => chunk(null, 2)).toThrowError('First argument must be an array');
    expect(() => chunk(undefined, 2)).toThrowError('First argument must be an array');
  });

  it('should throw an error if the second argument is not a positive integer', () => {
    expect(() => chunk([1, 2, 3], 0)).toThrowError('Second argument must be a positive integer');
    expect(() => chunk([1, 2, 3], -1)).toThrowError('Second argument must be a positive integer');
    expect(() => chunk([1, 2, 3], '2')).toThrowError('Second argument must be a positive integer');
    expect(() => chunk([1, 2, 3], 2.5)).toThrowError('Second argument must be a positive integer');
  });

  it('should return an array of arrays with the specified size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
    expect(chunk([1, 2, 3, 4, 5, 6, 7], 4)).toEqual([[1, 2, 3, 4], [5, 6, 7]]);
  });

  it('should return an array with a single chunk if size is equal to the length of the array', () => {
    expect(chunk([1, 2, 3, 4, 5], 5)).toEqual([[1, 2, 3, 4, 5]]);
  });

  it('should return an array with a single chunk if size is greater than the length of the array', () => {
    expect(chunk([1, 2, 3, 4, 5], 6)).toEqual([[1, 2, 3, 4, 5]]);
  });

  it('should return an empty array if the array is empty', () => {
    expect(chunk([], 2)).toEqual([]);
  });
});