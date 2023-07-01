//a4725d5fd7834844404833c65119e0c2;

const number = 4;
const inputArray = [13, 5, 3, 12, 7, 4, 29, 41, 14, 44];

function reverseArray(array) {
  const newArray = [...array];
  const length = newArray.length;
  const mid = Math.floor(length / 2);
  for (let i = 0; i < mid; i++) {
    const temp = newArray[i];
    newArray[i] = newArray[length - 1 - i];
    newArray[length - 1 - i] = temp;
  }
  return newArray;
}

const reversedArray = reverseArray(inputArray);
console.log(reversedArray);
