/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g = g.sort((a, b) => a - b)
    s = s.sort((a, b) => a - b)
    let result = 0
    let childIndex = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= g[childIndex]) {
            childIndex += 1
            result += 1
            if (childIndex === g.length) {
                break
            }
        }
    }

    return result
};
