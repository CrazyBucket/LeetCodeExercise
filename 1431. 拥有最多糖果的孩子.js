/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = Math.max(...candies);
  return candies.map(item => item + extraCandies >= max);
};
let candies = [2, 3, 5, 1, 3],
  extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));
