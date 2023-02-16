const chunk = (array, size) => {

  if (typeof array !== 'object' || !array) {
    throw new Error('First argument must be an array');
  }

  if (typeof size !== 'number' || size < 1 || !Number.isInteger(size)) {
  throw new Error("Second argument must be a positive integer");
  }

  let index = 0;
  let result = [];
  let chunk = [];

  for (let i = 0; i < array.length; i++) {
    if (index === size) {
      result[result.length] = chunk;
      chunk = [];
      index = 0;
    }

    chunk[index++] = array[i];
  }

  if (chunk.length > 0) {
    result[result.length] = chunk;
  }
  
  return result;
};

module.exports = chunk;