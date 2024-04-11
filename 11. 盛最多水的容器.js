/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0
    let len = height.length
    let left = 0
        , right = len - 1
    while (left < right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left))
        if (height[left] > height[right]) {
            right--
        } else if (height[left] < height[right]) {
            left++
        } else {
            right--
            left++
        }
    }
    return max
};
let height = [1, 1]
console.log(maxArea(height));