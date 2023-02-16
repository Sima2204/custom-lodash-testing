const find = (array, predicate) => {
    
  if (typeof array !== 'object' || !array) {
    throw new Error('First argument must be an array');
  }

  if (typeof predicate !== 'function') {
    throw new Error('Second argument must be a function');
  }

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      return array[i];
    }
  }

  return undefined;
};

module.exports = find;