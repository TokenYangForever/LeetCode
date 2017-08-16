/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(!nums.length)
        return 0
    let local = nums[0]
    let global = nums[0]
    for (let i = 1; i < nums.length; i++) {
        local = Math.max(nums[i], local + nums[i])
        global = Math.max(local, global);  
    }
    return global
};
