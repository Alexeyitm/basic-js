const { NotImplementedError } = require('../extensions/index.js');

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
  let result = 0;
  const resultArr = [];
  let lengStr = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    lengStr += 1;
  }

  const arr = matrix.join(',').split(',');

  for (let j = 0; j < arr.length; j++) {
    if (arr[j - lengStr] == 0) continue;
    else result += Number(arr[j]);
  }
  return result;
}

module.exports = {
  getMatrixElementsSum
};
