/**
 * @param {number[]} nums
 * @return {number}
 * 这道题跟Maximum Subarray模型上和思路上都比较类似，还是用一维动态规划中的“局部最优和全局最优法”。
 * 不过需要多维护一个最小局部变量，因为下次遇到负数时乘积可得一个最大值
 */
var maxProduct = function(nums) {
    var local = nums[0]
    var min = nums[0]
    var global = nums[0]
    for (var i = 1; i < nums.length; i++) {
        var localcopy = local
        local = Math.max(nums[i]*local, nums[i], min*nums[i])
        min = Math.min(nums[i]*localcopy, nums[i], min*nums[i])
        global = Math.max(local, global)
    }
    return global
};
