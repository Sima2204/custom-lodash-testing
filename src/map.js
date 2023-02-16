const map = (array, iteratee) => {

  if (typeof array !== 'object' || !array) {
    throw new Error("First argument must be an array");
  }

  if (typeof iteratee !== 'function') {
    throw new Error('Second argument must be a function');
  }
    
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = iteratee(array[i], i, array);
  }
    
  return result;
}

module.exports = map;