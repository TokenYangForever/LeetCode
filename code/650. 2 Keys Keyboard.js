/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
  if (n === 1) return 0
  if (n === 2) return 2
  if (n === 3) return 3
  let res = n
  for (let i = n - 1; i > 1; i--) {
    if (n % i === 0) {
      res = minSteps(n / i) + i
    }
  }
  return res
};
