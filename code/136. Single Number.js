/**
 * @param {number[]} nums
 * @return {number}
 * 判断数字是否相等：num^num === 0
 */
var singleNumber = function(nums) {
    let result = 0
    for (var i = 0; i < nums.length; i++) {
        result ^= nums[i]
    }
    return result
};
