const toPairs = (obj) => {
  const result = [];
  for (let key in obj) {
    result[result.length] = [key, obj[key]];
  }
  return result;
}

module.exports = toPairs;