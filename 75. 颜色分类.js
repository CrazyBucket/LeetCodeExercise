/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//统计数量
// var sortColors = function (nums) {
//   let count0 = 0;
//   let count1 = 0;
//   let count2 = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       count0++;
//     } else if (nums[i] === 2) {
//       count2++;
//     } else if (nums[i] === 1) {
//       count1++;
//     }
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (i < count0) {
//       nums[i] = 0;
//       continue;
//     }
//     if (i < count0 + count1) {
//       nums[i] = 1;
//       continue;
//     }
//     if (i < count0 + count1 + count2) {
//       nums[i] = 2;
//       continue;
//     }
//   }
//   return nums;
// };
var sortColors = function (nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else if (nums[mid] === 2) {
      [nums[high], nums[mid]] = [nums[mid], nums[high]];
      high--;
    }
  }

  return nums;
};

let nums = [1, 2, 0];
console.log(sortColors(nums));
