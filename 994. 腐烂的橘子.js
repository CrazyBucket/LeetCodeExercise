/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let minute = -1;
  var rotting = (grid, isFirst) => {
    let m = grid.length;
    let n = grid[0].length;
    let flag = false;
    let hasNew = false;
    if (!isFirst) {
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          if (grid[i][j] === 3) {
            flag = true;
            grid[i][j] = 2;
          } else if (grid[i][j] === 1) {
            hasNew = true;
          }
        }
      }
      if (!flag && !hasNew) {
        return minute;
      } else if (!flag && hasNew) {
        return -1;
      }
    }
    let new_flags = [];
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 2) {
          if (i > 0 && grid[i - 1][j] === 1) {
            new_flags.push([i - 1, j]);
          }
          if (i < m - 1 && grid[i + 1][j] === 1) {
            new_flags.push([i + 1, j]);
          }
          if (j > 0 && grid[i][j - 1] === 1) {
            new_flags.push([i, j - 1]);
          }
          if (j < n - 1 && grid[i][j + 1] === 1) {
            new_flags.push([i, j + 1]);
          }
        }
      }
    }
    for (let [x, y] of new_flags) {
      grid[x][y] = 3;
    }
    minute++;
    return rotting(grid, false);
  };
  return rotting(grid, true);
};

let grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
console.log(orangesRotting(grid));
