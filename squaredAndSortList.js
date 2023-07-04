const { mergeSort, findFirstNumber } = require("./utils.js");

/**
 * Function that takes an array, squares its elements, filters them
 * and sorts them in ascending order.
 *
 * @param {number[]} array - An array of elements in ascending order.
 * @param {number} S - Selected number
 * @returns {number[]} - The array with squared, filtered, and sorted
 * elements in ascending order.
 */
function squaredAndSort(array, S) {
  const SS = parseInt(S.toString() + S.toString());
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const squared = Math.pow(array[i], 2);
    if (squared <= SS) {
      newArray.push(squared);
    }
  }
  return mergeSort(newArray);
}

const S = findFirstNumber("a4725d5fd7834844404833c65119e0c2");
const inputArray = [-5, -4, 1, 2, 3, 3, 7, 15, 31];
console.log(squaredAndSort(inputArray, S));
