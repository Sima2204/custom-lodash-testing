const includes = require('../src/includes');

describe('includes', () => {
  it('returns true if value is in array', () => {
    expect(includes([1, 2, 3], 2)).toBe(true);
  });

  it('returns false if value is not in array', () => {
    expect(includes([1, 2, 3], 4)).toBe(false);
  });

  it('returns true if value is in string', () => {
    expect(includes('hello', 'l')).toBe(true);
    expect(includes('I like RSS', 'RSS')).toBe(true);
  });

  it('returns false if value is not in string', () => {
    expect(includes('hello', 'x')).toBe(false);
    expect(includes('Hello', 'h')).toBe(false);
    expect(includes({})).toBe(false);
  });

  it('returns true if value is NaN', () => {
    expect(includes([1, 2, 'hello', 'test', NaN], NaN)).toBe(true);
  });

  it('throws an error if first argument is not an array or string', () => {
    expect(() => includes(123)).toThrowError("First argument must be an array or a string");
  });

  it('throws an error if third argument is not a number', () => {
    expect(() => includes([1, 2, 3], 2, '2')).toThrowError("Third argument must be a number");
    expect(() => includes([1, 2, 3], 2, {})).toThrowError("Third argument must be a number");
  });
});