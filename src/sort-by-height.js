const { NotImplementedError } = require('../extensions/index.js');

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
  const newArr = [];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      newArr.push(arr[i]);
    }
  }

  newArr.sort(function(a, b) {
    return a - b
  });

  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == -1) {
      result.push(-1);
    }
    else {
      result.push(newArr[count]);
      count += 1;
    }
  }
  return result;
}

module.exports = {
  sortByHeight
};
