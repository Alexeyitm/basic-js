const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let sep = '';

  if (options.addition === null) {
    options.addition = "null"
  }

  if ((options.addition !== undefined) & (options.additionRepeatTimes == undefined) & (options.additionSeparator == undefined)) {
    sep += options.addition;
  }

  if ((options.addition !== undefined) & (options.additionRepeatTimes !== undefined) & (options.additionSeparator == undefined)) {
    const arr1 = [];
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      arr1.push(options.addition);
    }
    sep = arr1.join('|');
  }

  if ((options.addition !== undefined) & (options.additionRepeatTimes !== undefined) & (options.additionSeparator !== undefined)) {
    const arr2 = [];
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      arr2.push(options.addition);
      }
    sep = arr2.join(options.additionSeparator);
  }

  if ((options.addition !== undefined) & (options.additionRepeatTimes == undefined) & (options.additionSeparator !== undefined)) {
    sep = options.addition;
  }

  str += sep;

  if ((options.repeatTimes !== undefined) & (options.separator == undefined)) {
    const arr3 = [];
    for (let k = 0; k < options.repeatTimes; k++) {
      arr3.push(str);
    }
    str = arr3.join('+');
  }

  if ((options.repeatTimes !== undefined) & (options.separator !== undefined)) {
    const arr4 = [];
    for (let m = 0; m < options.repeatTimes; m++) {
      arr4.push(str);
    }
    str = arr4.join(options.separator);
  }

  return str;
}

module.exports = {
  repeater
};
