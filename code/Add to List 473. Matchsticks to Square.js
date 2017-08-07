/**
 * @param {number[]} nums
 * @return {boolean}
 * @思路是正确的，用def算法，但是js代码执行速度太慢，显示TLE。使用java和cpp可通过
 */
var makesquare = function(nums) {
    
    var def = function(nums, sum, index, target) {
        if (index === nums.length) {
            return sum[0] == sum[1] && sum[1] == sum[2]
        }
        for (let i = 0; i < 4; i++) {
        
            if (sum[i] + nums[index] > target) 
                continue;
            
            sum[i] += nums[index]
        
            if (def(nums, sum, index+1, target)) 
                return true;
            
        
            sum[i] -= nums[index]
        }
        return false
    }
    
    let sum = 0;
    if (nums.length < 4) {
        return false
    }
    if (nums.length === 4) {
        nums.sort();
        return nums[0] === nums[3]
    }
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    if (sum % 4 != 0) {
        return false
    }
    return def (nums, [0,0,0,0], 0, sum/4)
};
