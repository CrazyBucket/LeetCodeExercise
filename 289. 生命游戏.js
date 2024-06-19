/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  let m = board.length;
  let n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let count = 0;
      for (let x = Math.max(i - 1, 0); x <= Math.min(i + 1, m - 1); x++) {
        for (let y = Math.max(j - 1, 0); y <= Math.min(j + 1, n - 1); y++) {
          if (x !== i || y !== j) {
            if (board[x][y] === 1 || board[x][y] === 3) {
              count++;
            }
          }
        }
      }
      if (board[i][j] === 1 && (count < 2 || count > 3)) {
        board[i][j] = 3;
      }
      if (board[i][j] === 0 && count === 3) {
        board[i][j] = 2;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 3) {
        board[i][j] = 0;
      }
      if (board[i][j] === 2) {
        board[i][j] = 1;
      }
    }
  }
};
let board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];
gameOfLife(board);
console.log(board);
