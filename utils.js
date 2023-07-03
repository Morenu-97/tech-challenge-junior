/**
 * Function that swaps the elements of an array.
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

module.exports = {
  swapArray,
};
