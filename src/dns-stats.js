const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  const result = {};
  
  for (let i = 0; i < domains.length; i++) {
    const Arr = ((domains[i]).split('.'))
    const newArr = Arr.map(num => `.${num}`);
    let domain = '';
    for (let j = newArr.length - 1; j >= 0; j--) {
      domain += newArr[j];
      if (Object.keys(result).includes(domain)) {
        result[domain] += 1;
      } 
      else {
        result[domain] = 1;
      }
    } 
  }
  return result;
}

module.exports = {
  getDNSStats
};
