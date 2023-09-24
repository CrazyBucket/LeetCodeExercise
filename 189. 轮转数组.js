/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function (nums, k) {
//   for (let i = 0; i < k; i++) {
//     nums.unshift(nums[nums.length - 1]);
//     nums.pop();
//   }
// };
var rotate = function (nums, k) {
  k = k % nums.length;
  let arr = nums.splice(nums.length - k, nums.length);
  nums.unshift(...arr);
  console.log(nums);
};
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
rotate(nums, k);
