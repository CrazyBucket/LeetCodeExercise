/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const n = ratings.length;
  if (n <= 1) return n;

  const candies = new Array(n).fill(1); // 每个孩子至少有1颗糖果

  // 从左到右，如果右边孩子评分比左边高，则右边孩子糖果数为左边孩子糖果数加1
  for (let i = 1; i < n; ++i) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // 从右到左，如果左边的孩子评分比右边高，并且糖果数没有比右边孩子多，更新左边孩子的糖果数
  for (let i = n - 2; i >= 0; --i) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  // 计算总糖果数
  let sumCandies = 0;
  for (const count of candies) {
    sumCandies += count;
  }

  return sumCandies;
};

let ratings = [1, 0, 2];
console.log(candy(ratings));
