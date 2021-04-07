/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const indexesOfNull = [];
  return matrix.map((row) => row
    .filter((num, i) => (num === 0 ? indexesOfNull.push(i) : !indexesOfNull.includes(i)))
    .reduce((acc, num) => acc + num, 0))
    .reduce((acc, num) => acc + num, 0);
}

module.exports = getMatrixElementsSum;
