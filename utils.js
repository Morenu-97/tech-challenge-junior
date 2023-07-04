/**
 * Function that takes a string and returns the first number found in the string as an integer.
 * @param {string} string - The input string.
 * @returns {number} - The first number found in the string as an integer, or 6 if no number is found.
 */
function findFirstNumber(string = "c50ad4d76fe") {
  const match = string.match(/\d/); // Find the first number match in the strings
  return match ? parseInt(match[0]) : 6;
}

/**
 * Function that swaps the elements of an array.
 *
 * @param {Array} array - An list of elements.
 * @returns {Array} - The array with swapped elements.
 */
function swapArray(array) {
  const newArray = [...array];
  const length = newArray.length;
  const midIndex = Math.floor(length / 2);
  for (let i = 0; i < midIndex; i++) {
    const tempIndex = newArray[i];
    newArray[i] = newArray[length - 1 - i];
    newArray[length - 1 - i] = tempIndex;
  }
  return newArray;
}

/**
 * Function that sort an Array.
 *
 * @param {Array} array - An list of elements.
 * @returns {Array} - The sorted array.
 */
function mergeSort(array) {
  const merge = (leftArray, rightArray) => {
    let result = [];

    while (leftArray.length > 0 && rightArray.length > 0) {
      if (leftArray[0] < rightArray[0]) {
        result.push(leftArray[0]);
        leftArray.splice(0, 1);
      } else {
        result.push(rightArray[0]);
        rightArray.splice(0, 1);
      }
    }

    while (leftArray.length > 0) {
      result.push(leftArray[0]);
      leftArray.splice(0, 1);
    }

    while (rightArray.length > 0) {
      result.push(rightArray[0]);
      rightArray.splice(0, 1);
    }

    return result;
  };

  const sort = (array) => {
    if (array.length <= 1) {
      return array;
    }
    const indexMiddleArray = Math.floor(array.length / 2);
    const leftArray = array.slice(0, indexMiddleArray);
    const rightArray = array.slice(indexMiddleArray);

    const sortedLeftArray = sort(leftArray);
    const sortedRightArray = sort(rightArray);

    return merge(sortedLeftArray, sortedRightArray);
  };
  return sort(array);
}

module.exports = {
  swapArray,
  mergeSort,
  findFirstNumber,
};
