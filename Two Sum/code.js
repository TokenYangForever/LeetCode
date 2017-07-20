/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
var twoSum = function(nums, target) {
    let needmap = new Map();
    for (let i = 0; i < nums.length; i++){
        let val = nums[i]
        if (needmap.has(val)) {
            return [needmap.get(val), i]
        } else  if(!needmap.has(target - val)) {
            needmap.set(target - val, i)
        }
    }
};

/**
最新提交时间：2017/07/20
19个test全通过，执行时间: 162 ms
注：似乎用map封装的方法比直接用object更加耗时
*/
