/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let sum = 10000
    let result = []
    for (let i = 0; i < list1.length; i++) {
        let j = list2.indexOf(list1[i])
        if (j > -1) {
            if (j + i < sum) {
                sum = j + i
                result = [list1[i]]
            } else if (j + i === sum) {
                result.push(list1[i])
            }
        }
    }
    return result
};


/**
最新提交时间：2017/07/23
133个test全通过，执行时间: 225 ms
注：频繁地调用indexOf()方法非常耗时，提前将其赋值给一个零时变量供后续使用，从结果上来看节约了大几十ms的执行时间
*/
