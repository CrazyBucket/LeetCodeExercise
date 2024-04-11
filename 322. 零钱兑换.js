/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function (coins, amount) {
//     if (amount < 1) return 0;
//     coins.sort((a, b) => a - b);
//     let dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
//     dp[0] = 0;
//     for (let i = 1; i <= amount; i++) {
//         for (let j = 0; j < coins.length && coins[j] <= i; j++) {
//             dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
//         }
//     }
//     return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];
// };
var coinChange = function (coins, amount) {
    if (amount < 1) return 0
    coins.sort((a, b) => a - b)
    let dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER)
    dp[0] = 0
    for (let i = coins[0]; i < amount + 1; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i === coins[j]) {
                dp[i] = 1
            }
            if (i - coins[j] > 0) {
                dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i])
            }
        }
    }
    console.log(dp);
    return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount]
};
let coins = [1, 2, 5], amount = 11
console.log(coinChange(coins, amount));