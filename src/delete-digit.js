const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let max = 0;
  let result = 0;
  const arr = [];

  const str = String(n).split('')
  console.log(str)

  for (let i = 0; i < str.length; i++) {
    let newArr = str.slice(0, i).concat(str.slice(i + 1, i.length))
    console.log(newArr)
    let count = 0;
    for (let j = 0; j < newArr.length; j++) {
      count = Number(newArr.join(''));
      if (count > max) {
        max = count;
        result = max;
      }
    }
  }
  return result
}

module.exports = {
  deleteDigit
};
