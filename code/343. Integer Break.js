/**
 * @param {number} n
 * @return {number}
 * 3越多乘积越大，推理过程参考[http://m.blog.csdn.net/liyuanbhu/article/details/51198124](http://m.blog.csdn.net/liyuanbhu/article/details/51198124)
 */
var integerBreak = function(n) {
    if (n === 2 || n === 3) {
        return n -1
    }
    if (n === 4) {
        return 4
    }
    let result = 1
    while (n > 4) {
        result = result * 3
        n = n - 3
    }
    return n*result
};
