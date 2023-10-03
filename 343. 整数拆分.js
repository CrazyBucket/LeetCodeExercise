/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let dp = new Array(n + 1).fill(0);
  dp[2] = 1;
  dp[3] = 2;

  for (let i = 4; i <= n; i++) {
    for (let j = 2; j <= i - 2; j++) {
      dp[i] = Math.max(dp[i], j * Math.max(i - j, dp[i - j]));
    }
  }

  return dp[n];
};
let n = 10;
console.log(integerBreak(14));
