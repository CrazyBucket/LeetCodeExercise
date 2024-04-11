/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
    let count = 0
    let m = grid.length;
    let n = grid[0].length;
    const dfs = (grid, i, j) => {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === 0 || grid[i][j] === 2) {
            return;
        }
        grid[i][j] = 2;
        dfs(grid, i, j + 1);
        dfs(grid, i, j - 1);
        dfs(grid, i + 1, j);
        dfs(grid, i - 1, j);
    };
    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 1) {
            dfs(grid, i, 0);
        }
        if (grid[i][n - 1] === 1) {
            dfs(grid, i, n - 1);
        }
    }
    for (let j = 0; j < n; j++) {
        if (grid[0][j] === 1) {
            dfs(grid, 0, j);
        }
        if (grid[m - 1][j] === 1) {
            dfs(grid, m - 1, j);
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                count++
            }
        }
    }
    return count
};
let grid = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]]
console.log(numEnclaves(grid));