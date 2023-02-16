const dropWhile = require('../src/dropWhile');

describe('dropWhile', () => {
  it('should throw an error if the first argument is not an array', () => {
    expect(() => dropWhile('abc')).toThrowError('First argument must be an array');
    expect(() => dropWhile(123)).toThrowError('First argument must be an array');
  });

  it('should throw an error if the second argument is not a function', () => {
    expect(() => dropWhile([1, 2, 3], 'not a function')).toThrowError('Second argument must be a function');
    expect(() => dropWhile({})).toThrowError('Second argument must be a function');
  });

  it('should return an empty array if first argument is an empty object', () => {
    expect(dropWhile({}, () => true)).toEqual([]);
  });

  it('should return the same array if the predicate never returns false', () => {
    expect(dropWhile([1, 2, 3], () => true)).toEqual([1, 2, 3]);
  });

  it('should return the elements after the first one that returns false', () => {
    expect(dropWhile([1, 2, 3, 4, 5], n => n < 3)).toEqual([3, 4, 5]);
    expect(dropWhile([1, 2, 3, 4, 5, 2, 1], n => n < 4)).toEqual([4, 5, 2, 1]);
  });
});