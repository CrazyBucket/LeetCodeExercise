/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let before = [nums[0]];
  let after = [nums[nums.length - 1]];
  for (let i = 1; i < nums.length; i++) {
    before.push(nums[i] + before[i - 1]);
  }
  for (let i = 1; i < nums.length; i++) {
    after.unshift(nums[nums.length - i - 1] + after[0]);
  }
  for (let i = 0; i < nums.length; i++) {
    if (after[i] === before[i]) {
      return i;
    }
  }
  return -1;
};
let nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));
