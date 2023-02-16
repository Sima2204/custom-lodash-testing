const take = (array, n = 1) => {
    
  if (typeof array !== 'object' || !array) {
    throw new Error('First argument must be an array');
  }

  if (typeof n !== 'number' || n < 0) {
    throw new Error("Second argument must be a positive integer");
  }

  let result = [];
  for (let i = 0; i < n && i < array.length; i++) {
    result[result.length] = array[i];
  }
  return result;
}

module.exports = take;