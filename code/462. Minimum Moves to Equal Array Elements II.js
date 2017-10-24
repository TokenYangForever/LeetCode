/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    if (!nums || !nums.length || nums.length === 1) {
        return 0
    }
    nums = nums.sort((a,b) => a - b)
    let len = nums.length
    let target = 0
    let sum = 0
    if (len % 2 === 1) {
        target = nums[Math.round(len/2) - 1]
    } else {
        target = Math.round((nums[len/2] + nums[len/2-1])/2)
    }
    for (let i = 0; i < len; i++) {
        sum += Math.abs(nums[i] - target)
    }
    return sum
};
