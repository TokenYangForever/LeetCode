var triangleNumber = function(nums) {
    let result = 0
    let len = nums.length
    function sortNumber(a,b) 
    { 
        return a - b 
    } 
    nums.sort(sortNumber)
    if (len < 3)
        return 0
    for (let i = len - 1; i > 1; i--) {
        let l = 0
        let r = i - 1
        while (l < r) {
            if (nums[i] < nums[r] + nums[l]) {
                result += r - l
				r--
            } else {
                l++
            }
        }
    }
    return result
};
/**
 * 考虑到三角形中等边三角形的情况，一定是第三最大边固定，大于其他两边，所以先以最大值为起点，再进行二分查找
 */
