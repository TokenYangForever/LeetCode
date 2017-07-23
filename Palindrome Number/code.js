/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    if (x < 10) {
        return true
    }
    let reverse = 0;
    let copyx = x;
    while (copyx > 0) {
        reverse = reverse*10 + copyx % 10
        copyx = (copyx - copyx%10)/10
    }
    return x === reverse
};

/**
最新提交时间：2017/07/23
11507个test全通过，执行时间: 268 ms
第一次beat 100%
*/
