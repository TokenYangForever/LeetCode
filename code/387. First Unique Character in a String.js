/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let has = ''
    for (let i = 0; i < s.length; i++) {
        let item = s[i]
        if (has.includes(item)) {
            continue
        }
        if (s.indexOf(item) === s.lastIndexOf(item)) {
            return i
        } else {
            has += item
        }
    }
    return -1
};
