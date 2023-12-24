const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let st = str.split('');
  let counter = 0;
  let res = '';
  st.forEach((item, index, st) => {
    if(st[index] === st[index+1]) counter++
    else {
      counter ++;
      if(counter===1) {
        res+=item;
        counter = 0;
      } else {
        res += `${counter}${item}`
        counter = 0;
      }
    }
  })
  return res;
}

module.exports = {
  encodeLine
};
