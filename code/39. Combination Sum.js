/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = []
    candidates = candidates.sort((a, b) => a - b)
    function loop (temp, tag, index) {
        for (let i = index; i < candidates.length; i++) {
            if (candidates[i] === tag) {
				let subTemp = [...temp]
                subTemp.push(candidates[i])
                result.push(subTemp)
                break
            } else if (candidates[i] > tag) {
                break
            } else {
                loop([...temp, candidates[i]], tag - candidates[i], i)
            }
        }
    }
    loop([], target, 0)
    return result
};
