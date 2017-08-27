/**
 * @param {number[][]} triangle
 * @return {number}
 * 动态规划，从上到下依次求每层的最小和
 */
var minimumTotal = function(triangle) {
    if (!triangle || triangle.length == 0) {
        return 0
    }
    if (triangle.length == 1) {
        return triangle[0][0]
    }
    let sum = 0
    let levels = triangle.length
    for (var i = 1; i < levels; i++) {
        let upItem = triangle[i-1]
        let item = triangle[i]
        let len = item.length
        item[0] += upItem[0]
        item[len-1] += upItem[len-2]
        for (var j = 1; j < len - 1; j++) {
            item[j] += Math.min(upItem[j], upItem[j-1])
        }
        if (i === levels -1 ){
            item.sort((m, n)=>{return m - n})
            return item[0]
        }
    }
    return sum
};
