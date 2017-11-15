/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let height = grid.length
    let width = grid[0].length
    let dp = new Array(height)
    for (let index = 0; index < height; index++) {
        dp[index] = new Array(width)
    } 
    let max = 0
    function getArea (i, j) {
        if (i < 0 || j < 0 || i === height || j === width) {
            // 超出界限
            return 0
        }        
        if (grid[i][j] === 0 || dp[i][j]) {
            return 0
        }
        dp[i][j] = true
        return 1 + getArea(i - 1, j) + getArea(i + 1, j) + getArea(i, j - 1) + getArea(i, j + 1)
    }
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (dp[i][j] || grid[i][j] === 0) {
                continue
            }
            max = Math.max(max, getArea(i, j))
        }
    }
    return max
};
