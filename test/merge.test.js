const merge = require('../src/merge');

describe("merge", () => {
  it("should merge objects correctly", () => {
    const object = {
      'a': [{ 'b': 2 }, { 'd': 4 }]
    };
    const other = {
      'a': [{ 'c': 3 }, { 'e': 5 }]
    };
    const expected = { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] };
    expect(merge(object, other)).toEqual(expected);
  });

  it('should merge two objects', () => {
    const object = { 'a': 1, 'b': 2 };
    const other = { 'b': 3, 'c': 4 };
    const expected = { 'a': 1, 'b': 3, 'c': 4 };
    expect(merge(object, other)).toEqual(expected);
  });

  it('should return the first object if the second object is empty', () => {
    const object = { 'a': 1, 'b': 2 };
    const other = {};
    const expected = { 'a': 1, 'b': 2 };
    expect(merge(object, other)).toEqual(expected);
});

  it('should return the second object if the first object is empty', () => {
    const object = {};
    const other = { 'a': 1, 'b': 2 };
    const expected = { 'a': 1, 'b': 2 };
    expect(merge(object, other)).toEqual(expected);
  });
});