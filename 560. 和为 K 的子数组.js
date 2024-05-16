/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0;
  let map = new Map(); // map存的是(和，和的数量)
  let sum = 0;
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    // 检查是否存在一个前缀和，与当前的前缀和之差等于 k
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }

    // 更新前缀和在map中出现的次数
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
};
let nums = [1, 2, 3],
  k = 3;

console.log(subarraySum(nums, k));
