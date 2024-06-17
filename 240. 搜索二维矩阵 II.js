/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function (matrix, target) {
//   let m = matrix.length;
//   for (let i = 0; i < m; i++) {
//     const index = binarySearch(matrix[i], target);
//     if (index) {
//       return true;
//     }
//   }
//   return false;
// };
// var binarySearch = function (arr, target) {
//   let left = 0,
//     right = arr.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) {
//       return true;
//     } else if (arr[mid] > target) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return false;
// };

var searchMatrix = function (matrix, target) {
  const m = matrix.length,
    n = matrix[0].length;
  let i = 0,
    j = n - 1;
  while (i < m && j >= 0) {
    if (matrix[i][j] > target) {
      j--;
    } else if (matrix[i][j] < target) {
      i++;
    } else return true;
  }
  return false;
};
let matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ],
  target = 5;
console.log(searchMatrix(matrix, target));
