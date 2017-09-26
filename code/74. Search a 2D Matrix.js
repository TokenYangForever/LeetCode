/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || !matrix.length || !matrix[0].length) {
        return false
    }
    for (let i = 0; i < matrix.length; i++) {
        let item0 = matrix[i][0]
        if (i === matrix.length - 1 || (item0 < target && target < matrix[i+1][0])) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === target) {
                    return true
                }
                if (matrix[i][j] > target || j === matrix[i].length - 1) {
                    return false
                }
            }
        }
        if (item0 === target) {
            return true
        }
    }
};
