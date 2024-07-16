/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0)); // dp数组代表text1和text2前i,j位的子序列长度
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      //text1[i - 1] === text2[j - 1]意味着多了一个相同的子序列，反之取最大的
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  console.log(dp);

  return dp[m][n];
};
let text1 = 'abcde',
  text2 = 'ace';
console.log(longestCommonSubsequence(text1, text2));
