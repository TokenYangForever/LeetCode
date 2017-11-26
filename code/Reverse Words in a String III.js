/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let temp = s.split(' ')
    for (let i = 0; i < temp.length; i++) {
        let item = temp[i]
        let subtemp = ''
        for (let j = item.length - 1; j >= 0; j--) {
            subtemp += item[j]
        }
		temp[i] = subtemp
    }
    return temp.join(' ')
};
