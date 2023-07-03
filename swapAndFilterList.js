const { swapArray } = require("./utils.js");

/**
 * Function that swaps and filter digits if they are equal or greater than S
 * @param {Array} array - List of n numbers where n <= 100
 * @param {int} S - Selected number
 * @returns {Array} - The array with swapped and filtered elements
 */
function swapAndFilter(array, S) {
  const swappedArray = swapArray(array);
  const filteredArray = [];

  for (let i = 0; i < swappedArray.length; i++) {
    const element = swappedArray[i].toString();
    let filteredElement = "";

    for (let j = 0; j < element.length; j++) {
      const digit = parseInt(element[j]);
      if (digit < S) {
        filteredElement += digit;
      }
    }

    if (filteredElement !== "") {
      filteredArray.push(parseInt(filteredElement));
    }
  }
  return filteredArray;
}

const inputArray = [13, 5, 3, 12, 7, 4, 29, 41, 14, 44];
const S = 4;
console.log(swapAndFilter(inputArray, S));
