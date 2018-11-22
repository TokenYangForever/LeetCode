/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let temp = [0, 1, 2]
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }
    let i = 2
    while(i < n) {
        temp[i + 1] = temp[i] + temp[i - 1]
        i++
    }
    return temp[n]
};
