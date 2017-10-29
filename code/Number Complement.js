/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let count = num.toString(2)
    return Math.pow(2, count.length) - 1 - num
};
