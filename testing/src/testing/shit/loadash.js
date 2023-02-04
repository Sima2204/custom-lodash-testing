const chunk = (array, size) => {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
};
  
const compact = array => array.filter(Boolean);

const drop = (array, n = 1) => array.slice(n);

const dropWhile = (array, predicate) => {
  let dropNumber = array.findIndex(item => !predicate(item));
  return dropNumber === -1 ? [] : array.slice(dropNumber);
};

const take = (array, n = 1) => array.slice(0, n);

const filter = (array, predicate) => {
  let filtered = [];
  for (const item of array) {
    if (predicate(item)) filtered.push(item);
  }
  return filtered;
};

const find = (array, predicate) => {
  for (const item of array) {
    if (predicate(item)) return item;
  }
  return undefined;
};

const includes = (array, value, fromIndex = 0) =>
  array.indexOf(value, fromIndex) !== -1;

const map = (array, iteratee) => {
  let mapped = [];
  for (const item of array) {
    mapped.push(iteratee(item));
  }
  return mapped;
};


const zip = (...arrays) => {
  const shortestArrayLength = Math.min(...arrays.map(array => array.length));
  return Array.from({ length: shortestArrayLength }, (_, i) => arrays.map(array => array[i]));
};


const merge = (target, ...sources) => {
  for (const source of sources) {
    for (const [key, value] of Object.entries(source)) {
      target[key] = value;
    }
  }
  return target;
};

const omit = (object, keys) => {
  let newObject = {};
  for (const key in object) {
    if (!keys.includes(key)) {
      newObject[key] = object[key];
    }
  }
  return newObject;
};

const omitBy = (object, predicate) => {
  let newObject = {};
  for (const [key, value] of Object.entries(object)) {
    if (!predicate(value, key)) {
      newObject[key] = value;
    }
  }
  return newObject;
};

const pick = (object, keys) => {
  let newObject = {};
  for (const key of keys) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = object[key];
    }
  }
  return newObject;
};

const pickBy = (object, predicate) => {
  let newObject = {};
  for (const [key, value] of Object.entries(object)) {
    if (predicate(value, key)) {
      newObject[key] = value;
    }
  }
  return newObject;
};

const toPairs = object => Object.entries(object);

module.exports = {
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
};
