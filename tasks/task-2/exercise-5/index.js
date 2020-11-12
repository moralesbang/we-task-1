const getOccurrence = (list, element) =>
  list.filter((value) => value === element).length;

// Returns a new array with no-unique elements in an array
const removeUnique = (elements) =>
  elements.reduce((result, value) => {
    if (getOccurrence(elements, value) > 1) {
      return [...result, value];
    }
    return result;
  }, []);

console.log(removeUnique([1, 2, 3, 1, 3])); // [1, 3, 1,
