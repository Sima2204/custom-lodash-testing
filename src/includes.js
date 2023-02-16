const includes = (collection, value, fromIndex = 0) => {

  if (typeof collection === 'string') {
    return collection.indexOf(value, fromIndex) !== -1;
  }

  if (typeof collection !== 'object' || !collection) {
    throw new Error("First argument must be an array or a string");
  }

  if (typeof fromIndex !== 'number') {
    throw new Error("Third argument must be a number");
  }

  for (let i = fromIndex; i < collection.length; i++) {
    if (collection[i] === value || (value !== value && collection[i] !== collection[i])) {
      return true;
    }
  }
  return false;
}

module.exports = includes;