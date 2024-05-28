/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n).fill(0));
  }
  let rowBegin = 0;
  let colBegin = 0;
  let rowEnd = n - 1;
  let colEnd = n - 1;
  let cur = 1;
  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    for (let i = colBegin; i <= colEnd; i++) {
      matrix[rowBegin][i] = cur;
      cur++;
    }
    rowBegin++;
    for (let i = rowBegin; i <= rowEnd; i++) {
      matrix[i][colEnd] = cur;
      cur++;
    }
    colEnd--;
    for (let i = colEnd; i >= colBegin; i--) {
      matrix[rowEnd][i] = cur;
      cur++;
    }
    rowEnd--;
    for (let i = rowEnd; i >= rowBegin; i--) {
      matrix[i][colBegin] = cur;
      cur++;
    }
    colBegin++;
  }
  return matrix;
};
console.log(generateMatrix(4));
