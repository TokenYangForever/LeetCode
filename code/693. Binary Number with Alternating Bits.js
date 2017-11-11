/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
  let str = n.toString(2)
  if (str.includes('11') || str.includes('00')) {
      return false
  }
    return true
};
