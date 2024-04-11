/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (nums.length < 1) {
        return [-1, -1]
    }
    const binary = (nums, init) => {
        console.log(nums);
        if (nums.length < 1) {
            return [-1, -1]
        }
        if (nums.length === 1) {
            if (nums[0] === target) {
                return [0, 0]
            } else {
                return [-1, -1]
            }
        }
        let mid = Math.floor(nums.length / 2)
        if (nums[mid] === target) {
            let left = mid, right = mid
            while (left - 1 >= 0 && nums[left - 1] === target) {
                left--
            }
            while (right + 1 < nums.length && nums[right + 1] === target) {
                right++
            }
            return [left + init, right + init]
        } else if (nums[mid] > target) {
            return binary(nums.slice(0, mid), init)
        } else {
            return binary(nums.slice(mid), mid + init)
        }
    }
    return binary(nums, 0)
};
let nums =
    [0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 4],
    target =
        3
console.log(searchRange(nums, target));