/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
    dict = dict.sort((a, b) => a.length - b.length)
    let sent = sentence.split(' ')
    for (let i = 0; i < sent.length; i++) {
        for (let j = 0; j < dict.length; j++) {
            if (sent[i].startsWith(dict[j])) {
                sent[i] = dict[j]
                break
            }
        }
    }
    return sent.join(' ')
};
