/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if (!s) {
        return false
    }
    if (wordDict.includes(s)) {
        return true
    }
    let words = new Array(s.length)
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            let sub = s.substring(j, i)
            if (wordDict.includes(sub)) {
                if (j === 0 || !!words[j - 1]) {
                    words[i-1] = true
                    break
                }
            }
        }
    }
    return !!words[s.length - 1]
};
