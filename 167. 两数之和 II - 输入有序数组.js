/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0, right = numbers.length - 1
    while (left < right) {
        if (numbers[left] + numbers[right] === target) {
            return [left + 1, right + 1]
        }
        if (numbers[right] > target && numbers[left] + numbers[right] > target) {
            right--
            continue;
        }
        if (numbers[left] + numbers[right] < target) {
            left++
            continue
        }
        right--
    }
    console.log(left, right);
};
let numbers = [-10, -8, -2, 1, 2, 5, 6], target = 0
console.log(twoSum(numbers, target));