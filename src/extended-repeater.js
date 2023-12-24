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
  let additionRes = '';
  if(str instanceof Object){
    str = `${str}`
  }
  if(options.addition instanceof Object){
    options.addition = `${options.addition}`
  }
  if(options.addition && options.additionRepeatTimes || options.addition === false || options.addition === null){
    additionRes = Array(options.additionRepeatTimes).fill(`${options.addition}`).join(options.additionSeparator? options.additionSeparator : '|');
  }else if(options.addition && !options.additionRepeatTimes){
    additionRes = (`${options.addition}`);
  }
  return (Array(options.repeatTimes).fill(str+additionRes).join(options.separator? options.separator : '+'))
}

module.exports = {
  repeater
};
