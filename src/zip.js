const zip = (...arrays) => {

  let maxLength = 0;
  for (let i = 0; i < arrays.length; i++) {
    if (typeof arrays[i] !== 'object' || !arrays[i]) {
      throw new Error('All arguments must be arrays');
    }
    maxLength = Math.max(maxLength, arrays[i].length);
  }
  
  const result = [];
  for (let i = 0; i < maxLength; i++) {
    const values = [];
    for (let j = 0; j < arrays.length; j++) {
      values[j] = arrays[j][i];
    }
    result[i] = values;
  }
  return result;
}

module.exports = zip;