/**
 * @param {number[]} nums
 * @return {boolean}
 */
//思路：找到第1，2个数，遍历到后面的数都是第三个数，前两个都能保证是最小的按顺序的两个数
var increasingTriplet = function (nums) {
  let first = Number.MAX_SAFE_INTEGER;
  let second = Number.MAX_SAFE_INTEGER;

  for (const num of nums) {
    if (num <= first) {
      first = num; // 更新first为当前更小的值
    } else if (num <= second) {
      second = num; // 更新second为当前介于first和second之间的值
    } else {
      return true; // 找到了first < second < num
    }
  }

  return false; // 未找到满足条件的三元子序列
};

let nums = [2, 1, 5, 0, 4, 1];
console.log(increasingTriplet(nums));

// 超时
// var increasingTriplet = function (nums) {
//   for (let i = 0; i < nums.length - 2; i++) {
//     let j = i + 1;
//     while (j < nums.length - 1) {
//       if (nums[i] < nums[j] && j !== nums.length) {
//         let k = j + 1;
//         while (k < nums.length) {
//           if (nums[k] > nums[j]) {
//             return true;
//           }
//           k++;
//         }
//       }
//       j++;
//     }
//   }
//   return false;
// };
