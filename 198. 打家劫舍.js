/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let dp = [];
  //dp[i]代表下标i所能盗窃的最大金额
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[nums.length - 1];
};
let nums = [1, 2, 9, 11, 1];
console.log(rob(nums));
