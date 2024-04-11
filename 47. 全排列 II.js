/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    if (nums.length === 0) return []
    let result = []
    nums.sort((a, b) => a - b);
    let backtracking = (nums, path, used) => {
        if (path.length === nums.length) {
            result.push(path.slice())
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
                continue
            }
            used[i] = true
            path.push(nums[i])
            backtracking(nums, path, used)
            path.pop()
            used[i] = false
        }
    }
    backtracking(nums, [], new Array(nums.length).fill(false))
    return result
};
let nums = [1, 1, 3]
console.log(permuteUnique(nums));