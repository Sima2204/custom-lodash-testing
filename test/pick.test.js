const pick = require('../src/pick');

describe("pick", () => {
  it("should pick the correct keys", () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    const picked = ['a', 'c'];
    expect(pick(object, picked)).toEqual({ 'a': 1, 'c': 3 });
  });

  it("should return an empty object if no keys are found", () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    const picked = ['d'];
    expect(pick(object, picked)).toEqual({});
  });

  it("should return an empty object if keys is an empty array", () => {
    const object = { 'a': 1, 'b': '2', 'c': 3 };
    const picked = [];
    expect(pick(object, picked)).toEqual({});
  });
});