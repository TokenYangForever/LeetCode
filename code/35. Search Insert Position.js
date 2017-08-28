/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 二分查找
 */
var searchInsert = function(nums, target) {
    if (!nums || nums.length == 0) {
        return 0
    }
    var l = 0
    var r = nums.length - 1
    while (l <= r) {
        var mid = parseInt((l + r)/2)
        if (nums[mid] == target) {
            return mid
        }
        if (nums[mid] < target) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return l
};
