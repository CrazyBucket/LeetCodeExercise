/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  let same;
  let none;
  let map = new Map();
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (map.has(grid[i][j])) {
        same = grid[i][j];
      } else {
        map.set(grid[i][j], 1);
      }
    }
  }
  for (let i = 1; i < grid.length * grid.length + 1; i++) {
    if (!map.has(i)) {
      none = i;
      break;
    }
  }
  return [same, none];
};
let grid = [
  [9, 1, 7],
  [8, 9, 2],
  [3, 4, 6],
];
console.log(findMissingAndRepeatedValues(grid));
