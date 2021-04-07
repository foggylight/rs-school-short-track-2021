/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexes = [];
  const sortedArr = arr.filter((n, i) => {
    if (n === -1) {
      indexes.push(i);
      return false;
    }
    return true;
  }).sort((a, b) => a - b);

  const res = [];
  for (let i = 0, j = 0; i < arr.length; i += 1) {
    if (indexes.includes(i)) {
      res.push(-1);
    } else {
      res.push(sortedArr[j]);
      j += 1;
    }
  }
  return res;
}

module.exports = sortByHeight;
