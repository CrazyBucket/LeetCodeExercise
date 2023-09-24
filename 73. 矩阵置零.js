/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let rowsToZero = new Set();
  let colsToZero = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rowsToZero.add(i);
        colsToZero.add(j);
      }
    }
  }

  for (let row of rowsToZero) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[row][j] = 0;
    }
  }

  for (let col of colsToZero) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }

  console.log(matrix);
};

let matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
setZeroes(matrix);
