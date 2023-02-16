const find = require('../src/find');

describe('find', () => {
  it('should throw an error if the first argument is not an array', () => {
    expect(() => find('abc')).toThrowError('First argument must be an array');
    expect(() => find(123)).toThrowError('First argument must be an array');
  });

  it('should throw an error if the second argument is not a function', () => {
    expect(() => find([], 'not a function')).toThrowError('Second argument must be a function');
    expect(() => find({}, 123)).toThrowError('Second argument must be a function');
  });

  it('should find the first element that matches the predicate', () => {
    const array1 = [1, 2, 3, 4];
    const result1 = find(array1, (n) => n % 2 === 0);
    expect(result1).toEqual(2);
    const array2 = [1, 4, 7, 10];
    const result2 = find(array2, (n) => n % 2 === 0);
    expect(result2).toEqual(4);
  });

  it('should return undefined if no element matches the predicate', () => {
    const array1 = [1, 3, 5, 7];
    const result1 = find(array1, (n) => n % 2 === 0);
    expect(result1).toBeUndefined();
    const array2 = {};
    const result2 = find(array2, (n) => n % 2 === 0);
    expect(result2).toBeUndefined();
  });
});