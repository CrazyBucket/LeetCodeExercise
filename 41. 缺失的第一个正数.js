/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            //需要理解，换位后，如果那个位置也不符合，需要再换一次
            // [ -1, 4, 3, 1 ]
            // [ 1, -1, 3, 4 ]
            // [ 1, -1, 3, 4 ]
            // [ 1, -1, 3, 4 ]
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }
        console.log(nums);
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
    return n + 1;
};
//let set = new Set()使用了额外空间，不符合要求
// var firstMissingPositive = function (nums) {
//     let set = new Set()
//     nums.forEach((item) => {
//         set.add(item)
//     })
//     let ans = 1
//     while (ans <= nums.length) {
//         if (!set.has(ans)) {
//             return ans
//         } else {
//             ans++
//         }
//     }
//     return ans
// };
let nums = [3, 4, -1, 1]
console.log(firstMissingPositive(nums));