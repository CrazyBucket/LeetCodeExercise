/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//解法1
//        let newArr = Array.from(new Set(nums));
//        nums.length = 0; // 清空原数组
//        nums.push(...newArr); // 将不重复的元素添加回原数组
//        return newArr.length;
//解法2（bad）
//   let slow = 0;
//   let fast = 1;
//   while (fast <= nums.length) {
//     if (nums[slow] === nums[fast]) {
//       nums.splice(fast, 1);
//     } else {
//       slow++;
//       fast++;
//     }
//   }
//   console.log(nums);
// };
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  console.log(nums);

  return slow + 1;
};
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(nums);
