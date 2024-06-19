/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  var size = 9;
  var rows = new Array(size);
  var cols = new Array(size);
  var boxes = new Array(size);
  for (var i = 0; i < size; i++) {
    rows[i] = new Array(size).fill(false);
    cols[i] = new Array(size).fill(false);
    boxes[i] = new Array(size).fill(false);
  }
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      if (board[i][j] === '.') {
        continue;
      }
      var num = board[i][j] - '1';
      var box_index = parseInt(i / 3) * 3 + parseInt(j / 3);
      if (rows[i][num] || cols[j][num] || boxes[box_index][num]) {
        return false;
      }
      rows[i][num] = true;
      cols[j][num] = true;
      boxes[box_index][num] = true;
    }
  }
  return true;
};
let board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
console.log(isValidSudoku(board));
