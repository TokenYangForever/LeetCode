/**
 * @param {number[]} nums
 * @return {string}
 * 重点在排序方法
 */
var largestNumber = function(nums) {
    let len = nums.length
    if (len === 0) {
        return ""
    }
    if (len === 1) {
        return nums[0].toString()
    }
    let result = ''
    let sortBy = function (a, b) {
        let ab = a.toString() + b 
        let ba = b.toString() + a
        return Number(ba) - Number(ab)
    }
    nums.sort(sortBy)
    for (let i =0;i<len;i++){
        result += nums[i]
    }
    while (result.startsWith ('0') && result.length > 1) {
        result = result.substring(1)
    }
    return result
};
