/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let reach = 0
    let max = 0
    let step = 0
    for (let i = 0; i < nums.length; i++) {
        if (reach < i && max >= i) {
            step++
            reach = max
        }
        max = Math.max(max, i+nums[i])
    }
    return step
};
