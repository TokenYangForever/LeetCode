/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let len = s.length
    let next = new Array(len).fill(0)
    let j = 0
    let i = 1
    while (i < len) {
        if (s[i] === s[j]) {
            j += 1
            next[i] = j
            i++
        } else if(j === 0){
            i++
        } else {
            j = next[j-1]
        }
    }
    return !!next[len - 1] && (next[len - 1] % (len - next[len - 1]) == 0)
};
