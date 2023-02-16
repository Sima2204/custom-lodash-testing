const compact = (array) => {

  if (typeof array !== 'object' || !array) {
    throw new Error('The argument must be an array');
  }
  
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      result[result.length] = array[i];
    }
  }
  
  return result;
};

module.exports = compact;