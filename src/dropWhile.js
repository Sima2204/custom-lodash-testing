const dropWhile = (array, predicate ) => {

  if (typeof array !== 'object' || !array) {
    throw new Error('First argument must be an array');
  }
  
  if (typeof predicate  !== 'function') {
    throw new Error('Second argument must be a function');
  }
  
  let start = 0;
  for (let i = 0; i < array.length; i++) {
    if (!predicate(array[i], i, array)) {
      start = i;
      break;
    }
  }

  let result = [];
  for (let i = start; i < array.length; i++) {
    result[result.length] = array[i];
  }
  
  return result;
};
  
module.exports = dropWhile;