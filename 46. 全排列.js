/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (nums.length === 0) return []
    let result = []
    let backtracking = (nums, path) => {
        if (path.length === nums.length) {
            result.push(path.slice());
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (path.includes(nums[i])) {
                continue;
            }
            path.push(nums[i])
            backtracking(nums, path)
            path.pop()
        }
    }
    backtracking(nums, [])
    return result
};
let nums = [1, 2, 3]
console.log(permute(nums));