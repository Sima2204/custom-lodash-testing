function merge(object, other) {
  for (let prop in other) {
    if (object[prop] === undefined) {
      object[prop] = other[prop];
    } else if (typeof object[prop] === 'object') {
      merge(object[prop], other[prop]);
    } else {
      object[prop] = other[prop];
    }
  }
  return object;
}

module.exports = merge;