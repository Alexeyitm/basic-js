const { NotImplementedError } = require('../extensions/index.js');

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
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let str = []
    for (let j = 0; j < matrix[i].length; j++) {
      let count = 0;

      if ((matrix[i-1] !== undefined) && (matrix[i-1][j-1] == true)) {
        count += 1;
      }
      if ((matrix[i-1] !== undefined) && (matrix[i-1][j] == true)) {
        count += 1;
      }
      if ((matrix[i-1] !== undefined) && (matrix[i-1][j+1] == true)) {
        count += 1;
      }
      if (matrix[i][j-1] == true) {
        count += 1;
      }
      if (matrix[i][j+1] == true) {
        count += 1;
      }
      if ((matrix[i+1] !== undefined) && (matrix[i+1][j-1] == true)) {
        count += 1;
      }
      if ((matrix[i+1] !== undefined) && (matrix[i+1][j] == true)) {
        count += 1;
      }
      if ((matrix[i+1] !== undefined) && (matrix[i+1][j+1] == true)) {
        count += 1;
      }
      str.push(count);
    }
    result.push(str);
  }
  return result;
}

module.exports = {
  minesweeper
};
