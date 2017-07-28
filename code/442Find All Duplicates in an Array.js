/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let r = []
    for (let i = 0; i < nums.length; i++) {
        var n = nums[i]
        var vindex = Math.abs(n) - 1
        if (nums[vindex] < 0) {
            r.push(Math.abs(n))
        } else {
            nums[vindex] *= -1
        }
    }
    return r
};
