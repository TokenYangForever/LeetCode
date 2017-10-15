/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    var nums3 = []
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            nums3.push([nums1[i], nums2[j], nums1[i]+nums2[j]])
        }
    }
    nums3.sort((a, b) => a[2]-b[2])
    if (k > nums3.length) {
        return nums3
    } else {
        return nums3.slice(0, k)
    }
};
