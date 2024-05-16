// //本质上其实是56.合并区间啊

// /**
//  * @param {string} s
//  * @return {number[]}
//  */
// var partitionLabels = function (s) {
//   let intervals = [];
//   let set = new Set();
//   for (let i = 0; i < s.length; i++) {
//     let last = s.lastIndexOf(s[i]);
//     if (set.has(last)) {
//       continue;
//     } else {
//       set.add(last);
//       intervals.push([i, last]);
//     }
//   }
//   for (let i = 0; i < intervals.length; i++) {
//     if (intervals[i + 1]) {
//       if (intervals[i][1] >= intervals[i + 1][0]) {
//         intervals[i][1] = Math.max(intervals[i + 1][1], intervals[i][1]);
//         intervals.splice(i + 1, 1);
//         i--;
//       }
//     }
//   }
//   let ans = [];
//   intervals.forEach(item => {
//     ans.push(item[1] - item[0] + 1);
//   });
//   return ans;
// };
/**
 * @param {string} s
 * @return {number[]}
 */
//这个求end的方法简直天才，我还搁这lastIndexOf呢
var partitionLabels = function (s) {
  let hash = [];
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = i;
  }
  let result = [];
  let left = 0;
  let right = 0;
  for (let i = 0; i < s.length; i++) {
    right = Math.max(right, hash[s[i]]);
    if (right === i) {
      result.push(right - left + 1);
      left = i + 1;
    }
  }
  return result;
};
let s = "ababcbacadefegdehijhklij";
console.log(partitionLabels(s));
