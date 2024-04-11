/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function (s) {
//     const n = s.length;
//     if (n === 0) return '';
//     let result = ''
//     // dp[i][j] 来表示字符串从索引 i 到 j 的子串是否为回文子串
//     const dp = new Array(n).fill(false).map(() => new Array(n).fill(false));
//     // 初始化单个字符为回文子串的情况
//     for (let i = 0; i < n; i++) {
//         dp[i][i] = true;
//         result = s[i];
//     }

//     // 初始化长度为 2 的回文子串的情况
//     for (let i = 0; i < n - 1; i++) {
//         if (s[i] === s[i + 1]) {
//             dp[i][i + 1] = true;
//             result = s.substring(i, i + 2);
//         }
//     }

//     for (let len = 3; len <= n; len++) {
//         for (let i = 0; i + len - 1 < n; i++) {
//             const j = i + len - 1;
//             if (s[i] === s[j] && dp[i + 1][j - 1]) {
//                 dp[i][j] = true;
//                 const subString = s.substring(i, j + 1);
//                 if (subString.length > result.length) {
//                     result = subString;
//                 }
//             }
//         }
//     }


//     return result
// };
//更好的方法
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2) return s
    let res = ""

    for (let i = 0; i < s.length; i++) {
        help(i, i)
        help(i, i + 1)
    }

    function help(m, n) {
        while (m >= 0 && n < s.length && s[m] == s[n]) {
            m--;
            n++;
        }
        if (n - m - 1 > res.length) {
            res = s.slice(m + 1, n)
        }
    }
    return res
};
let s = "aaaaa"
console.log(longestPalindrome(s));