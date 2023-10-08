/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] === 0) {
      let flag = false;
      for (let j = i - 1; j >= 0; j--) {
        if (nums[j] > i - j) {
          flag = true;
          break;
        }
      }
      if (!flag) {
        return false;
      }
    }
  }
  return true;
};
let nums = [3, 2, 1, 0, 4];
console.log(canJump(nums));
