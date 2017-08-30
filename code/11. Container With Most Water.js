/**
 * @param {number[]} height
 * @return {number}
 * 维护一个最大值变量，然后从两边向中间遍历
 */
var maxArea = function(height) {
    var result = 0
    var l = 0
    var r = height.length - 1
    while (l < r) {
        if (height[l] < height[r]) {
            result = Math.max(result, height[l]*(r-l))
            l++
        } else {
            result = Math.max(result, height[r]*(r-l))
            r--
        }
    }
    return result
};
