/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    nums.sort((a,b) => a-b)
    let result = []
    for (let i = 0; i < nums.length;) {
        if (i === nums.length -1 || nums[i] != nums[i + 1]) {
            result.push(nums[i])
            if (result.length === 2) {
                break
            }
            i++
        } else {
            i += 2
        }
    }
    return result
};
