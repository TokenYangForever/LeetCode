/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let long
    let short
    let result = []
    nums1.sort()
    nums2.sort()
    if (nums1.lenth > nums2.length) {
        long = nums1
        short = nums2
    } else {
        long = nums2
        short = nums1
    }
    for (let i = 0; i < short.length; i++) {
        let index = long.indexOf(short[i])
        if (index > -1) {
            result.push(short[i])
            long.splice(index, 1)
        }
    }
    return result
};
