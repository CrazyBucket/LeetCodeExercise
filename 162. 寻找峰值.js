/**
 * @param {number[]} nums
 * @return {number}
 */
// emmm时间复杂度是n
// var findPeakElement = function (nums) {
//   if (nums.length === 0) {
//     return 0;
//   }
//   if (nums.length === 1) {
//     return 1;
//   }
//   if (nums.length < 3) {
//     return nums[0] > nums[1] ? 0 : 1;
//   }
//   for (let i = 1; i < nums.length - 1; i++) {
//     if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
//       return i;
//     }
//   }
//   return 0;
// };
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
let nums = [1, 2, 1, 3, 5, 6, 4];
console.log(findPeakElement(nums));
