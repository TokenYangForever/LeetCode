/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let result = 0
	let dp = []
	let pre = 1
    for (let j = 1; j < s.length; j++) {
        if (s[j] == s[j - 1]) {
            pre++
        } else {
            dp.push(pre)
			pre = 1
        }
    }
	dp.push(pre)
    if (dp.length > 1) {
        for (let i = 1; i < dp.length; i++) {
            result += Math.min(dp[i], dp[i-1])
        }
    }
    return result
};
