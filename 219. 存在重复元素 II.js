/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], i);
    } else {
      if (Math.abs(i - map.get(nums[i])) <= k) {
        return true;
      } else {
        map.set(nums[i], i);
      }
    }
  }
  return false;
};
let nums = [1, 0, 1, 1],
  k = 1;
console.log(containsNearbyDuplicate(nums, k));
