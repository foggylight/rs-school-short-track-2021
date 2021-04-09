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
  let count = 1;
  let res = '';
  for (let i = 0; i < str.length; i += 1) {
    if (str[i - 1] === str[i]) {
      count += 1;
    } if (str[i + 1] !== str[i]) {
      res += `${count === 1 ? str[i] : count + str[i]}`;
      count = 1;
    }
  }
  return res;
}

module.exports = encodeLine;
