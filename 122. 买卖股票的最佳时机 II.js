/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let res = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1]) {
      if (prices[i + 1] >= prices[i]) {
        res = res + prices[i + 1] - prices[i];
      }
    }
  }
  return res;
};
let prices = [3, 3, 5];
console.log(maxProfit(prices));
