/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((row, ir, arr) => row
    .map((cell, ic) => {
      let res = 0;
      if (row[ic + 1]) {
        res += 1;
      } if (row[ic - 1]) {
        res += 1;
      } if (ir > 0 && arr[ir - 1][ic]) {
        res += 1;
      } if (ir < arr.length - 1 && arr[ir + 1][ic]) {
        res += 1;
      } if (ir > 0 && arr[ir - 1][ic - 1]) {
        res += 1;
      } if (ir > 0 && arr[ir - 1][ic + 1]) {
        res += 1;
      } if (ir < arr.length - 1 && arr[ir + 1][ic - 1]) {
        res += 1;
      } if (ir < arr.length - 1 && arr[ir + 1][ic + 1]) {
        res += 1;
      }
      return res;
    }));
}

module.exports = minesweeper;
