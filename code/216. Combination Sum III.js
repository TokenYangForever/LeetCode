/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = []
    function loop (arr, target, start, left) {
        if (start > target) {
            return
        }
        if (left === 1 && target === start) {
            arr.push(target)
            result.push(arr)
        } else {
            arr.push(start)
            left -= 1
            target -= start
            for (let i = start + 1; i <= 9; i++) {
				let tempArr = [...arr]
                loop(tempArr, target, i, left)
            }
        }
    }
    for (let ind = 1; ind <= 9; ind++) {
        loop([], n, ind, k)
    }
    return result
};
