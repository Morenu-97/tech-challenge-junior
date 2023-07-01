const ss = 44;
const inputArray = [-5, -4, 1, 2, 3, 3, 7, 15, 31];
const newArray = [];

for (let i = 0; i < inputArray.length; i++) {
  const squared = Math.pow(inputArray[i], 2);
  if (squared <= ss) {
    newArray.push(squared);
  }
}
console.log(newArray);
