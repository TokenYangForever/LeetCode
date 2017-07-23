/**
 * @param {string} s
 * @return {number}
 * @author Token
 */
var lengthOfLongestSubstring = function(s) {
    let sub = '' // 暂存子字符串
    let maxlength = 0 // 子字符串的长度
    for (let i = 0; i<s.length; i++) {
        if (sub.includes(s[i])) {
            maxlength = Math.max(sub.length, maxlength)          
            sub = sub.substring(sub.indexOf(s[i])+1) + s[i]
        } else {
            sub+=s[i]
            
            if (i === s.length - 1) {
                maxlength = Math.max(sub.length, maxlength)
            }
        }
    }

    return maxlength
};

/**
最新提交时间：2017/07/23
983个test全通过，执行时间: 212 ms
*/
