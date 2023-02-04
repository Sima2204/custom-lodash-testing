const {
    chunk,
    compact,
    drop,
    dropWhile,
    take,
    filter,
    find,
    includes,
    map,
    zip,
    merge,
    omit,
    omitBy,
    pick,
    pickBy,
    toPairs
} = require('./loadash');

describe('chunk', () => {
    it('should chunk an array into specified size', () => {
      const array = [1, 2, 3, 4, 5];
      const size = 2;
      const result = chunk(array, size);
      expect(result).toEqual([[1, 2], [3, 4], [5]]);
    });
  });
  
describe('compact', () => {
it('should remove falsey values from an array', () => {
    const array = [0, 1, false, 2, '', 3];
    const result = compact(array);
    expect(result).toEqual([1, 2, 3]);
});
});

describe('drop', () => {
it('should remove the specified number of elements from the start of an array', () => {
    const array = [1, 2, 3, 4, 5];
    const n = 3;
    const result = drop(array, n);
    expect(result).toEqual([4, 5]);
});
});

describe('dropWhile', () => {
it('should remove elements from the start of an array until the specified condition is met', () => {
    const array = [1, 2, 3, 4, 5];
    const predicate = value => value < 3;
    const result = dropWhile(array, predicate);
    expect(result).toEqual([3, 4, 5]);
});
});

describe('take', () => {
it('should return the specified number of elements from the start of an array', () => {
    const array = [1, 2, 3, 4, 5];
    const n = 3;
    const result = take(array, n);
    expect(result).toEqual([1, 2, 3]);
});
});

describe('filter', () => {
it('filters the array based on the provided callback', () => {
    const array = [1, 2, 3, 4];
    const filteredArray = filter(array, n => n % 2 === 0);
    expect(filteredArray).toEqual([2, 4]);
});

it('returns an empty array if no elements match the filter', () => {
    const array = [1, 3, 5, 7];
    const filteredArray = filter(array, n => n % 2 === 0);
    expect(filteredArray).toEqual([]);
});
});
  
describe('find', () => {
    it('returns the first element that matches the provided callback', () => {
      const array = [1, 2, 3, 4];
      const foundElement = find(array, n => n % 2 === 0);
      expect(foundElement).toEqual(2);
    });
  
    it('returns undefined if no elements match the filter', () => {
      const array = [1, 3, 5, 7];
      const foundElement = find(array, n => n % 2 === 0);
      expect(foundElement).toBeUndefined();
    });
});

describe('includes', () => {
    it('returns true if the value is found in the array', () => {
      const array = [1, 2, 3, 4];
      const includesValue = includes(array, 2);
      expect(includesValue).toBe(true);
    });
  
    it('returns false if the value is not found in the array', () => {
      const array = [1, 3, 5, 7];
      const includesValue = includes(array, 2);
      expect(includesValue).toBe(false);
    });
});

describe('map', () => {
    it('transforms the elements of the array using the provided callback', () => {
      const array = [1, 2, 3, 4];
      const mappedArray = map(array, n => n * 2);
      expect(mappedArray).toEqual([2, 4, 6, 8]);
    });
});

describe('zip', () => {
    it('combines the elements of the arrays at the same index into sub-arrays', () => {
      const array1 = [1, 2, 3];
      const array2 = [4, 5, 6];
      const zippedArray = zip(array1, array2);
      expect(zippedArray).toEqual([[1, 4], [2, 5], [3, 6]]);
    });
  
    it('stops combining elements when the shortest input array is exhausted', () => {
      const array1 = [1, 2, 3];
      const array2 = [4, 5];
      const zippedArray = zip(array1, array2);
      expect(zippedArray).toEqual([[1, 4], [2, 5]]);
    });
});

describe('merge', () => {
    it('merges the properties of two objects into a single object', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { c: 3, d: 4 };
      const mergedObj = merge(obj1, obj2);
      expect(mergedObj).toEqual({ a: 1, b: 2, c: 3, d: 4 });
    });
  
    it('overwrites properties with the same key from the second object', () => {
      const obj1 = { a: 1, b: 2 };
      const obj2 = { b: 3, c: 4 };
      const mergedObj = merge(obj1, obj2);
      expect(mergedObj).toEqual({ a: 1, b: 3, c: 4 });
    });
});

describe('omit', () => {
    it('omits the specified properties from an object', () => {
      const obj = { a: 1, b: 2, c: 3 };
      const omittedObj = omit(obj, ['a', 'c']);
      expect(omittedObj).toEqual({ b: 2 });
    });
  
    it('returns the original object if no properties are specified', () => {
      const obj = { a: 1, b: 2, c: 3 };
      const omittedObj = omit(obj, []);
      expect(omittedObj).toEqual({ a: 1, b: 2, c: 3 });
    });
});

describe('omitBy', () => {
    it('omits properties from an object based on the result of a provided function', () => {
      const obj = { a: 1, b: 2, c: 3 };
      const omittedObj = omitBy(obj, (value, key) => key === 'a' || value === 2);
      expect(omittedObj).toEqual({ c: 3 });
    });
  
    it('returns the original object if no properties are omitted', () => {
      const obj = { a: 1, b: 2, c: 3 };
      const omittedObj = omitBy(obj, () => false);
      expect(omittedObj).toEqual({ a: 1, b: 2, c: 3 });
    });
});

describe('pick', () => {
  it('should return an object with only the specified keys', () => {
    const object = { a: 1, b: 2, c: 3 };
    const keys = ['a', 'c'];
    const result = pick(object, keys);
    expect(result).toEqual({ a: 1, c: 3 });
  });
});

describe('pickBy', () => {
  it('should return an object with only the key-value pairs that pass the predicate test', () => {
    const object = { a: 1, b: 2, c: 3 };
    const predicate = (value, key) => value >= 2;
    const result = pickBy(object, predicate);
    expect(result).toEqual({ b: 2, c: 3 });
  });
});

describe('toPairs', () => {
  it('should return an array of key-value pairs from an object', () => {
    const object = { a: 1, b: 2, c: 3 };
    const result = toPairs(object);
    expect(result).toEqual([['a', 1], ['b', 2], ['c', 3]]);
  });
});
