/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let str = n.toString(2)
    var reverse = (Array(32 - str.length).fill(0).concat(str.split(''))).reverse().join('');
    return parseInt(reverse, 2)
};
