/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class SingleQueue {
  constructor() {
    this.list = [];
  }
  push(i) {
    while (this.list.length > 0 && this.list[this.list.length - 1] < i) {
      this.list.pop();
    }
    this.list.push(i);
  }
  max() {
    return this.list[0];
  }
  pop(i) {
    if (this.list.length > 0 && this.list[0] === i) {
      this.list.shift();
    }
  }
}
var maxSlidingWindow = function (nums, k) {
  let list = new SingleQueue();
  let ans = [];
  for (let i = 0; i < k; i++) {
    list.push(nums[i]);
  }
  ans.push(list.max());
  console.log(list);

  for (let j = k; j < nums.length; j++) {
    console.log(list);

    list.pop(nums[j - k]);
    list.push(nums[j]);
    console.log(list);

    ans.push(list.max());
  }
  return ans;
};
let nums = [1, -1],
  k = 1;
console.log(maxSlidingWindow(nums, k));
