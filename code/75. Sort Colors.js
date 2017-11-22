/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let red = 0
    let white = 0
    let blue = 0
    for (let i in nums) {
        if (nums[i] === 0) {
            red++
        } else if (nums[i] === 1) {
            white++
        } else {
            blue++
        }
    }
    let index = 0
    while (index < red) {
        nums[index] = 0
        index++
    }
    while (index < red + white) {
        nums[index] = 1
        index++
    }
    while (index < red + white + blue) {
        nums[index] = 2
        index++
    }
};
