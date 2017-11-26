/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0
    let y = 0
    for (let i in moves) {
        let temp = moves[i]
        switch (temp) {
            case 'L':
                x--;
                break;
            case 'R':
                x++;
                break
            case 'U':
                y++
                break
            case 'D':
                y--
                break
        }
    }
    return x === y && x === 0
};
