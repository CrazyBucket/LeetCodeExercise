/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = []
    if (nums.length < 3) {
        return result
    }
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            if (nums[i] + nums[left] + nums[right] === 0) {
                result.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] === nums[left + 1]) left++ // 处理重复元素
                while (left < right && nums[right] === nums[right - 1]) right-- // 处理重复元素
                left++
                right--
            } else if (nums[i] + nums[left] + nums[right] > 0) {
                right--
            } else {
                left++
            }
        }
    }
    return result
};

let nums = [0, 0, 0, 0]
console.log(threeSum(nums));