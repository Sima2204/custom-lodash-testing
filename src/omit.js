const omit = (object, keys) => {

  const result = {};
  for (let key in object) {
    let found = false;
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === key) {
        found = true;
        break;
      }
    }
    if (!found) {
      result[key] = object[key];
    }
  }
  return result;
}

module.exports = omit;