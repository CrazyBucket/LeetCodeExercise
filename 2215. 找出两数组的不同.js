/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let set1 = new Set();
  let set2 = new Set();
  for (let i = 0; i < nums1.length; i++) {
    set1.add(nums1[i]);
  }
  for (let i = 0; i < nums2.length; i++) {
    set2.add(nums2[i]);
  }

  let ans0 = [];
  let ans1 = [];
  for (let item of set1) {
    if (!set2.has(item)) {
      ans0.push(item);
    }
  }
  for (let item of set2) {
    if (!set1.has(item)) {
      ans1.push(item);
    }
  }
  return [ans0, ans1];
};
let nums1 = [1, 2, 3],
  nums2 = [2, 4, 6];
console.log(findDifference(nums1, nums2));
