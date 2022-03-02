const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
  throw new Error('\'arr\' parameter must be an instance of the Array!')
  }

  const result = [];
  const cloneArr = [...arr];

  for (let i = 0; i < cloneArr.length; i++) {
    if (typeof(cloneArr[i]) == 'number') {
      result.push(cloneArr[i]);
    }
    if ((cloneArr[i] == '--discard-next') && (i < i.length - 1)) {
      i += 1;
    }
    if ((cloneArr[i] == '--discard-prev') && (i > 0)) {
      result.pop();
    }
    if ((cloneArr[i] == '--double-next')  && (i < i.length - 1)) {
      console.log(i)
      result.push(cloneArr[i+1]);
    }
    if ((cloneArr[i] == '--double-prev') && (i > 0)) {
      result.push(cloneArr[i-1]);
    }
    if ((cloneArr[i] == '--double-prev') && (cloneArr[i-2] == '--discard-next')) {
      result.pop();
      result.pop();
    }
    if ((cloneArr[i] == '--double-prev') && (cloneArr[i-2] == '--double-next')) {
      result.push(cloneArr[i-1]);
    }
    if ((cloneArr[i] == '--discard-prev') && (cloneArr[i-2] == '--double-next')) {
      result.push(cloneArr[i-1]);
    }
  }
  return result;
}

module.exports = {
  transform
};
