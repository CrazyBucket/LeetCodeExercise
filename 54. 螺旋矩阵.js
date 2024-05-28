/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let colBegin = 0;
  let rowBegin = 0;
  let colEnd = matrix[0].length - 1;
  let rowEnd = matrix.length - 1;
  let result = [];
  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    for (let j = colBegin; j <= colEnd; j++) {
      result.push(matrix[rowBegin][j]);
    }
    rowBegin++;

    for (let i = rowBegin; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd]);
    }
    colEnd--;

    if (rowBegin <= rowEnd) {
      for (let j = colEnd; j >= colBegin; j--) {
        result.push(matrix[rowEnd][j]);
      }
    }
    rowEnd--;

    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        result.push(matrix[i][colBegin]);
      }
    }
    colBegin++;
  }
  return result;
};
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log(spiralOrder(matrix));
