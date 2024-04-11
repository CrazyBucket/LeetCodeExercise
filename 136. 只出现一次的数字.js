/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], false)
        } else {
            map.set(nums[i], true)
        }
    }
    for (let [key, value] of map.entries()) {
        if (value) {
            return key
        }
    }
};

let nums = [2, 2, 1]
console.log(singleNumber(nums));