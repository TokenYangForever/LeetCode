/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let table = '`ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (n === 0)
        return ''
    function judge (num) {
        if (num <= 26) {
            return table[num]
        } else {
            let count = Math.ceil(num/26) - 1
            return judge(count) + judge(num - 26*count)
        }
    }
    return judge(n)
};
