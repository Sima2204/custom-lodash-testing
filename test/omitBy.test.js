const omitBy = require('../src/omitBy');

describe("omitBy", () => {
  it("should omit properties based on the predicate", () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    const expected = { 'a': 1, 'c': 3 };
    const isString = value => typeof value === 'string';
    expect(omitBy(object, isString)).toEqual(expected);
  });

  it("should return an empty object if all properties are omitted", () => {
    const object = { 'a': '1', 'b': '2', 'c': '3' };
    const expected = {};
    const isString = value => typeof value === 'string';
    expect(omitBy(object, isString)).toEqual(expected);
  });

  it("should return an empty object if first argument is not an object", () => {
    const object = 'abc';
    const expected = {};
    const isString = value => typeof value === 'string';
    expect(omitBy(object, isString)).toEqual(expected);
  });
});