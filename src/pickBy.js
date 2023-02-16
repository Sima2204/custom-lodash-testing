const pickBy = (obj, func) => {
  const result = {};
  for (let key in obj) {
    let isEnumerable = false;
    for (let p in obj) {
      if (p === key) {
        isEnumerable = true;
        break;
      }
    } 
    if (isEnumerable && func(obj[key])) {
      result[key] = obj[key];
    }
  }
  return result;
}

module.exports = pickBy;