const omit = require('../src/omit');

describe("omit", () => {
  it("should return an object without specified properties", () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    const expected = { 'a': 1, 'c': 3 };
    const result = omit(object, ['b']);
    expect(result).toEqual(expected);
  });

  it("should return an object without specified properties even if they do not exist", () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    const expected = { 'a': 1, 'b': '2', 'c': 3 };
    const result = omit(object, ['d']);
    expect(result).toEqual(expected);
  });

  it("should return an empty object if all properties are omitted", () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    const expected = {};
    const result = omit(object, ['a', 'b', 'c']);
    expect(result).toEqual(expected);
  });

  it("should return the original object if no properties are omitted", () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    const expected = { 'a': 1, 'b': '2', 'c': 3 };
    const result = omit(object, []);
    expect(result).toEqual(expected);
  });
});