/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    B = ',' + B.join(',,') + ','
    let result = 0
    for (let i = 0; i < A.length; i++) {
        let substr = ',' + A[i] + ','
        if (B.includes(substr)) {
            let dpSum = 1
            for (let j = i + 1; j < A.length; j++) {
                substr = substr + ',' + A[j] + ','
                if (B.includes(substr)) {
                    dpSum += 1
                } else {
                    break
                }
            }
            result = Math.max(dpSum, result)
        }
    }
    return result
};
