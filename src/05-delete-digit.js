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
  const res = [];
  const digits = `${n}`.split('');
  for (let i = 0; i < digits.length; i += 1) {
    const newN = [...digits];
    newN.splice(i, 1);
    res.push(+newN.join(''));
  }
  return res.sort((a, b) => b - a)[0];
}

module.exports = deleteDigit;
