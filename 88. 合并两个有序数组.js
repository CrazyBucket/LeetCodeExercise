/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  //最省事解法
  //   nums1.splice(m, nums1.length - m, ...nums2);
  //   nums1.sort((a, b) => a - b);

  // 定义指针指向nums1的最后一个元素
  let firstPoint = m - 1,
    // 定义指针指向nums2的最后一个元素
    secondPoint = n - 1;
  // firstPoint或secondPoint任一超
  // 出数组范围则结束遍历
  while (firstPoint >= 0 && secondPoint >= 0) {
    // 将两指针所指的较大的元素放入最后nums1最后的位置
    // (即nums1[firstPoint+seoncdPoint+1])然后将相应的数
    // 组元素前移一位
    if (nums1[firstPoint] > nums2[secondPoint]) {
      nums1[firstPoint + secondPoint + 1] = nums1[firstPoint];
      firstPoint--;
    } else {
      nums1[firstPoint + secondPoint + 1] = nums2[secondPoint];
      secondPoint--;
    }
  }
  // 如果secondPoint未超出数组范围，
  // 则将剩余元素逐个放入nums1中
  if (secondPoint >= 0) {
    for (let i = 0; i <= secondPoint; i++) nums1[i] = nums2[i];
  }

  // 如果firstPoint未超过数组范围，
  // 由于firstPoint所指元素本身就在
  // nums1中且是升序的，因此无需操作
};

// 示例
var nums1 = [0];
var m = 0;
var nums2 = [1];
var n = 1;
merge(nums1, m, nums2, n);
