function hasSameElements(array1, array2) {
  // Use the rest operator to gather elements from both arrays
  const [ ...rest1 ] = array1;
  const [ ...rest2 ] = array2;

  // Use the spread operator to create sets of unique elements
  const set1 = [...new Set(rest1)];
  const set2 = [...new Set(rest2)];

  // Check if the sets are equal using the deep equality comparison (JSON.stringify)
  return JSON.stringify(set1) === JSON.stringify(set2);
}

// Example usage:
const arr1 = [1, 2, 3, 4];
// const arr2 = [4, 3, 2, 1];
const arr2 = [1, 2, 3, 4];

const result = hasSameElements(arr1, arr2);
console.log(result);