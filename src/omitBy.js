const omitBy = (object, predicate) => {

  const result = {};
  for (const key in object) {
    if (!predicate(object[key])) {
      result[key] = object[key];
    }
  }
  return result;
}

module.exports = omitBy;