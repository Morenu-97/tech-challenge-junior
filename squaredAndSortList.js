const number = 4;
const ss = parseInt(number.toString() + number.toString());
const inputArray = [-5, -4, 1, 2, 3, 3, 7, 15, 31];
const newArray = [];

for (let i = 0; i <= inputArray.length - 1; i++) {
  const squared = Math.pow(inputArray[i], 2);
  if (squared <= ss) {
    newArray.push(squared);
  }
}
console.log(newArray);
console.log(ss);

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const indexMiddleArray = Math.floor(array.length / 2);
  const leftArray = array.slice(0, indexMiddleArray);
  const rightArray = array.slice(indexMiddleArray);

  const sortedLeftArray = mergeSort(leftArray);
  const sortedRightArray = mergeSort(rightArray);

  return merge(sortedLeftArray, sortedRightArray);
}

function merge(leftArray, rightArray) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      result.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < leftArray.length) {
    result.push(leftArray[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightArray.length) {
    result.push(rightArray[rightIndex]);
    rightIndex++;
  }

  return result;
}

const sortedArray = mergeSort(newArray);
console.log(sortedArray);
