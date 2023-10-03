/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let result = 0;
  for (let num of set) {
    //找起点
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (set.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      result = Math.max(result, currentStreak);
    }
  }
  return result;
};
let nums = [0];
console.log(longestConsecutive(nums));
