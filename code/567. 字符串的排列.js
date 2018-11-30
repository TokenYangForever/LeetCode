/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 每次在s2中取一个长度与s1相等的子字符串,比较该子字符串与s1所包含的字母是否相同
// 每次移动子字符串时，最左边的字母计数减1，最右字母计数加1
var checkInclusion = function(s1, s2) {
    if (!s1 || !s2 || s1.length > s2) {
        return false
    }
    let countS1 = countLetters(s1)
    let countS2 = countLetters(s2.substring(0, s1.length))
    for (let i = s1.length; i < s2.length; i++) {
        if (isSame(countS1, countS2)) {
            return true
        } else {
            countS2[s2[i-s1.length]] -= 1
            countS2[s2[i]] = ~~countS2[s2[i]] + 1
        }
    }
    return isSame(countS1, countS2)
    function countLetters(str) {
        let temp = {}
        for (let i of str) {
            temp[i] = ~~temp[i] + 1
        }
        return temp
    }
    function isSame(obj1, obj2) {
        for (let [key, value] of Object.entries(obj1)) {
            if (obj2[key] !== value) {
                return false
            }
        }
        return true
    }
};
