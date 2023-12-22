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
  s1 = s1.split('').sort((a,b) => a.localeCompare(b));
  s2 = s2.split('').sort((a,b) => a.localeCompare(b));
  let i = 0,
  j = 0,
  result = [];

  while(i<s1.length && j<s2.length) {
    if(s1[i] < s2[j]){
        i++;
    } else if(s1[i] > s2[j]) {
        j++;
    } else {
        result.push(s1[i]);
        i++;
        j++;
    }
  }
  return result.length;
}

module.exports = {
  getCommonCharacterCount
};
