/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let sum = init === undefined ? (init = nums[0]) : init;
  let start = init === undefined ? 1 : 0;
  for (let i = start; i < nums.length; i++) {
    sum = fn(sum, nums[i]);
  }
  return sum;
};
let nums = [1, 2, 3, 4];
fn = function sum(accum, curr) {
  return accum + curr;
};
let init = 0;
console.log(reduce(nums, fn, init));
