/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slow = 0;
  let same = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[slow] !== nums[i]) {
      slow++;
      nums[slow] = nums[i];
      same = 0;
    } else {
      same++;
      if (same <= 1) {
        slow++;
        nums[slow] = nums[i];
      }
    }
    console.log(nums);
  }
  return slow + 1;
};
let nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums));
