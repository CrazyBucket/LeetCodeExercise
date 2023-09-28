/**
 * @param {number[]} cost
 * @return {number}
 */
//版本一
var minCostClimbingStairs = function (cost) {
  cost.push(0);
  //将最后一位设置为0，可以避免花费
  let dp = [];
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return dp[cost.length - 1];
};
//版本二
// var minCostClimbingStairs = function (cost) {
//   const dp = [0, 0];
//   for (let i = 2; i <= cost.length; ++i) {
//     dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
//   }
//   return dp[cost.length];
// };
//版本二好像比一快一点，但是内存多
let cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairs(cost));
