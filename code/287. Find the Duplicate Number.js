/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    var re = {}
    for (var i = 0; i < nums.length; i++) {
        if (re[nums[i]]) {
            return nums[i]
        } else {
            re[nums[i]] = 1
        }
    }
};
