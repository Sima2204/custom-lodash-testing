const pick = (obj, keys) => {
  let result = {};
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}

module.exports = pick;