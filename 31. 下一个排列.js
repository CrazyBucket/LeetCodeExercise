// 寻找第一个下降点：

// 从后往前，找到第一个 nums[i]，满足 nums[i] < nums[i + 1]。这个位置是我们需要调整匹配的地方。
// 寻找要交换的元素：

// 继续向后，找到最小的那个大于 nums[i] 的元素 nums[j]，我们会与 nums[i] 交换，使得在这个位置的调整最小化地增大排列顺序。
// 交换元素：

// 交换 nums[i] 和 nums[j]。
// 反转后面的序列：

// 为了形成新的排列，反转从 i + 1 开始到数组结尾的部分。

//什么b题，看不懂什么意思，遇到了挂了就完了
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const n = nums.length;
  let i = n - 2;

  // 1. 找到第一个下降点，从后往前找
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    // 2. 找到最小的那个大于 nums[i] 的元素
    let j = n - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    // 3. 交换
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // 4. 反转从 i+1 到末尾的部分
  reverse(nums, i + 1);
};

function reverse(nums, start) {
  let left = start,
    right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}
console.log(nextPermutation([1, 2, 3]));
