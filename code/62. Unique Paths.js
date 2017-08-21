/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if (m == 1 || n == 1) {
        return 1
    }
    var arr = []
    arr[0] = new Array(n).fill(1)
    for (var i = 1; i < m; i++) {
        arr[i] = new Array(n)
        arr[i][0] = 1
        for (var j = 1; j < n; j++) {
            arr[i][j] = arr[i][j-1] + arr[i-1][j]
        }
    }
    return arr[m-1][n-1]
};
