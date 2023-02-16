const pickBy = require('../src/pickBy');

describe("pickBy", () => {
  it("should pick properties correctly with a function", () => {
    const object = { a: 1, b: 2, c: 3 };
    const predicate = (value, key) => value % 2 === 0;
    expect(pickBy(object, predicate)).toEqual({ b: 2 });
  });
 
  it("should return an empty object when no properties match the predicate", () => {
    const object = { a: 1, b: 3, c: 5 };
    const predicate = (value, key) => value % 2 === 0;
    expect(pickBy(object, predicate)).toEqual({});
  });
 
  it("should pick all properties when all properties match the predicate", () => {
    const object = { a: 2, b: 4, c: 6 };
    const predicate = (value, key) => value % 2 === 0;
    expect(pickBy(object, predicate)).toEqual({ a: 2, b: 4, c: 6 });
  });
});