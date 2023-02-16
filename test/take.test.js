const take = require('../src/take');

describe('take', () => {
  it('should throw an error if the first argument is not an array', () => {
      expect(() => take('abc', 2)).toThrowError('First argument must be an array');
      expect(() => take(123, 2)).toThrowError('First argument must be an array');
    });
  
  it('should throw an error if the second argument is not a positive integer', () => {
    expect(() => take([1, 2, 3, 4, 5], -2)).toThrowError("Second argument must be a positive integer");
  });

  it('should return the first n elements of the array', () => {
    expect(take({}, 10)).toEqual([]);
    expect(take([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
  });

  it('should return the first element of the array', () => {
    expect(take([1, 2, 3])).toEqual([1]);
  });

  it('should return an empty array if n is 0', () => {
    expect(take({}, 0)).toEqual([]);
    expect(take([1, 2, 3, 4, 5], 0)).toEqual([]);
  });

  it('should return all elements if n is greater than the length of the array', () => {
    expect(take([1, 2, 3, 4, 5], 10)).toEqual([1, 2, 3, 4, 5]);
  });
});