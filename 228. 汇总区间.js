/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let j = i
        while (nums[j + 1] && (nums[j + 1] - 1) === nums[j]) {
            j++
        }
        if (i === j) {
            result.push(String(nums[i]))
        } else {
            result.push(nums[i] + '->' + nums[j])
        }
        i = j
    }
    return result
};