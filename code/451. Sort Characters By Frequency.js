/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let dp = {}
    for (let i = 0; i < s.length; i++) {
        if (dp[s[i]]) {
            dp[s[i]]++
        } else {
            dp[s[i]] = 1
        }
    }
    let arr = Object.entries(dp).sort((a, b) => b[1] - a[1])
    let result = ''
    for (let j = 0; j < arr.length; j++) {
        result += arr[j][0].repeat(arr[j][1])
    }
    return result
};
