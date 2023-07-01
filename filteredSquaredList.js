const ss = 44;
const inputArray = [-5, -4, 1, 2, 3, 3, 7, 15, 31];
const newArray = [];

for (let i = 0; i <= inputArray.length - 1; i++) {
  const Squered = Math.pow(inputArray[i], 2);
  if (Squered <= ss) {
    newArray.push(Squered);
  }
}
console.log(newArray);
