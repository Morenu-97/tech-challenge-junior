const { filterNumberByDigit, findFirstNumber } = require("./utils.js");

/**
 * Function that swaps and filter digits if they are equal or greater than S
 *
 * @param {number[]} array - List of n numbers where n <= 100
 * @param {number} S - Selected number
 * @returns {number[]} - The array with swapped and filtered elements
 */
function swapAndFilter(array, S) {
  const filteredArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    const filteredNumber = filterNumberByDigit(parseInt(array[i]), S);
    if (!Number.isNaN(filteredNumber)) {
      filteredArray.push(filteredNumber);
    }
  }
  return filteredArray;
}

/**
 * Function that removes any digit of the number equal or greater than S
 *
 * @param {number} originalNumber - Original number.
 * @param {number} S - Number S to be verified with.
 * @returns {number} - Number with digits S removed.
 */
function filterNumberByDigit(originalNumber, S) {
  const element = originalNumber.toString();
  let filteredElement = "";

  for (let j = 0; j < element.length; j++) {
    const digit = parseInt(element[j]);
    if (digit < S) {
      filteredElement += digit;
    }
  }

  return parseInt(filteredElement);
}

const inputArray = [13, 5, 3, 12, 7, 4, 29, 41, 14, 44];
const S = findFirstNumber("a4725d5fd7834844404833c65119e0c2");
console.log(swapAndFilter(inputArray, S));
