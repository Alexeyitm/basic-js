const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const arrS1 = s1.split('');
  const arrS2 = s2.split('');
  for (let i = 0; i < arrS1.length; i++) {
    //console.log(arrS1[i])
    for (let j = 0; j < arrS2.length; j++) {
      if (arrS1[i] == arrS2[j]) {
        count += 1;
        i = 0;
        arrS1.splice(arrS1[i], 1);
        arrS2.splice(arrS2[j], 1);
      }
    }
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};
