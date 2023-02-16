const compact = require('../src/compact');

describe('compact', () => {
  
  it('should throw an error if the argument is not an array', () => {
    expect(() => compact('abc')).toThrowError('The argument must be an array');
    expect(() => compact(123)).toThrowError('The argument must be an array');
    expect(() => compact(null)).toThrowError('The argument must be an array');
    expect(() => compact(undefined)).toThrowError('The argument must be an array');
  });

  it('should return an array without falsy values', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
    expect(compact([null, undefined, NaN, '', 0, 1, false, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should return an empty array if all values are falsy', () => {
    expect(compact([0, false, '', null, undefined, NaN])).toEqual([]);
  });

  it('should return an identical array if there are no falsy values', () => {
    expect(compact([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return an empty array if the input array is empty', () => {
    expect(compact([])).toEqual([]);
  });
});