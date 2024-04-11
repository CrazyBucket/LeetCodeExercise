/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (grid.length === 0 || grid === null) return 0
    let count = 0
    let m = grid.length
    let n = grid[0].length
    const dfs = (grid, i, j) => {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === '0') {
            return
        }
        grid[i][j] = '0'
        dfs(grid, i, j + 1)
        dfs(grid, i, j - 1)
        dfs(grid, i - 1, j)
        dfs(grid, i + 1, j)
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                count++
                dfs(grid, i, j)
            }
        }
    }
    return count
};
let grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]
console.log(numIslands(grid));