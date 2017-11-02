/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let len = nums.length
    let rightMost = 1
    for (let i = 0; i < len; i++) {
        if (rightMost < i + 1) {
            break
        } else {
            rightMost = Math.max(rightMost, i + nums[i] + 1)
            if (rightMost >= len) {
                return true
            }
        }
    }
    return rightMost >=len
};
