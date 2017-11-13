/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let head = word[0]
    let tail = word.slice(1)
    if (/[A-Z]/.test(head)) {
        return tail == tail.toUpperCase() || tail == tail.toLowerCase()
    } else {
        return tail == tail.toLowerCase()
    }
};
