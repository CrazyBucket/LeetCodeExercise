/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  nums = nums.sort((a, b) => a - b);
  let left = 0,
    right = nums.length - 1,
    ans = 0;
  console.log(nums);

  while (left < right) {
    if (nums[left] + nums[right] === k) {
      left++;
      right--;
      ans++;
    } else if (nums[left] + nums[right] > k) {
      right--;
    } else {
      left++;
    }
  }
  return ans;
};
let nums = [1, 2, 3, 4],
  k = 5;
console.log(maxOperations(nums, k));
