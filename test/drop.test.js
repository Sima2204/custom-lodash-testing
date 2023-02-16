const drop = require('../src/drop');

describe('drop', () => {
  it('should throw an error if the first argument is not an array', () => {
    expect(() => drop('abc')).toThrowError('First argument must be an array');
    expect(() => drop(123)).toThrowError('First argument must be an array');
  });

  it('should throw an error if the second argument is not a positive integer', () => {
    expect(() => drop([1, 2, 3], -1)).toThrowError('Second argument must be a positive integer');
    expect(() => drop([1, 2, 3], 'a')).toThrowError('Second argument must be a positive integer');
  });

  it('should return an array with the specified number of elements dropped', () => {
    expect(drop({}, 2)).toEqual([]);
    expect(drop([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5]);
    expect(drop([1, 2, 3, 4, 5], 3)).toEqual([4, 5]);
    expect(drop([1, 2, 3, 4, 5], 5)).toEqual([]);
    expect(drop([1, 2, 3, 4, 5], 6)).toEqual([]);
  });

  it('should return an empty array if the number of elements to drop is equal or more than the length of the array', () => {
    expect(drop([1, 2, 3], 3)).toEqual([]);
    expect(drop([1, 2, 3], 5)).toEqual([]);
  });

  it('should return the same array if the second argument is 0', () => {
    expect(drop({}, 0)).toEqual([]);
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  it('should return an array with the first element dropped if the second argument is not specified', () => {
    expect(drop({})).toEqual([]);
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });
});