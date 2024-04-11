/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

//暴力

// var wordBreak = function (s, wordDict) {
//     for (let i = 0; i < wordDict.length; i++) {
//         if (s === wordDict[i]) {
//             return true
//         }
//         if (s.includes(wordDict[i])) {
//             let words = s.split(wordDict[i])
//             words = words.filter(item => item !== '')
//             if (words.length === 0) return true
//             console.log(words);
//             let flag = true
//             for (let j = 0; j < words.length; j++) {
//                 console.log(words[j]);
//                 flag = flag && wordBreak(words[j], wordDict)
//                 if (!flag) break;
//             }
//             if (flag) return true;
//         }
//     }
//     return false
// };

//dp

var wordBreak = function (s, wordDict) {
    const dp = new Array(s.length + 1).fill(false);//多一位处理''
    dp[0] = true;
    let set = new Set(wordDict)
    for (let i = 0; i < s.length + 1; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && set.has(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length]
};
let s =
    "cars"
    , wordDict =
        ["car", "ca", "rs"]
console.log(wordBreak(s, wordDict));