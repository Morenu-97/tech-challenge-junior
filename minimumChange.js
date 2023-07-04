/**
 * Function that calculates the minimum amount of change that
 * cannot be given using the provided coins.
 *
 * @param {number[]} coins - An array of positive integers representing the values of coins.
 * @returns {number} The minimum amount of change that cannot be given.
 */
function minimumChange(coins) {
  coins.sort((a, b) => a - b);

  let minChange = 1;

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] <= minChange) {
      minChange += coins[i];
    } else {
      break;
    }
  }

  return minChange;
}

const coins = [5, 7, 1, 1, 2, 3, 22];
console.log(minimumChange(coins));
