/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function (nums) {
//   let before = [];
//   let after = [];
//   let result = [];
//   let sum = 1;
//   for (i of nums) {
//     before.push(i * sum);
//     sum = i * sum;
//   }
//   sum = 1;
//   for (let i = nums.length - 1; i >= 0; i--) {
//     after.unshift(nums[i] * sum);
//     sum *= nums[i];
//   }
//   result.push(after[1]);
//   for (let i = 0; i < nums.length; i++) {
//     if (i > 0 && i + 1 < nums.length) {
//       result.push(before[i - 1] * after[i + 1]);
//     }
//   }
//   result.push(before[nums.length - 2]);
//   return result;
// };
//双5%，太捞了

//双指针
var productExceptSelf = function (nums) {
  let n = nums.length;
  let left = 1,
    right = 1;
  let ans = new Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    ans[i] *= left;
    ans[n - i - 1] *= right;
    left *= nums[i];
    right *= nums[n - i - 1];
  }
  return ans;
};
let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
