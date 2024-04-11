/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let len = Math.max(word1.length, word2.length)
    let ans = []
    for (let i = 0; i < len; i++) {
        if (word1[i]) {
            ans.push(word1[i])
        }
        if (word2[i]) {
            ans.push(word2[i])
        }
    }
    return ans.join('')
};
let word1 = 'fuck'
let word2 = 'you'
console.log(mergeAlternately(word1, word2));