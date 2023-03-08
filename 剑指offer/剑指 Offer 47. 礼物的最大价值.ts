function maxValue(grid: number[][]): number {
  const m = grid.length,
    n = grid[0].length;
  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[j] = Math.max(dp[j - 1], dp[j]) + grid[i - 1][j - 1];
    }
  }
  return dp[n];
}
//这题用了动态规划，没有理解，自己只是做了贪心算法，下次遇到动态规划可以回过头理解一下。
