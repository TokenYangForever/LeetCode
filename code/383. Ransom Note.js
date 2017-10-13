/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for (var i = 0; i < ransomNote.length; i++) {
        var len = magazine.indexOf(ransomNote[i])
        if (len < 0) {
            return false
        }
        magazine = magazine.replace(magazine[len], '')
    }
    return true
};
