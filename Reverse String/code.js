/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let r = ''
    for (let i = s.length - 1; i > -1; i--) {
        r += s.charAt(i)
    }
    return r
};

/**
最新提交时间：2017/07/24
476个test全通过，执行时间: 132 ms
*/

/**
tips:
@ s.charAt(i) 比 s[i] 执行速度快
@ 反转字符串网上有种写法就是先转换成数组再掉用数组的reverse方法再转回字符串: return s.split('').reverse().join('')；
  其实这样执行速度比用for循环更慢
@ 变量名越短执行速度越快，在执行次数较多的函数中尤为明显
*/
