/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    let m = board.length;
    let n = board[0].length;
    const dfs = (board, i, j) => {
        if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] !== 'O') {
            return;
        }
        board[i][j] = 'B';
        dfs(board, i, j + 1);
        dfs(board, i, j - 1);
        dfs(board, i + 1, j);
        dfs(board, i - 1, j);
    };
    for (let i = 0; i < m; i++) {
        if (board[i][0] === 'O') {
            dfs(board, i, 0);
        }
        if (board[i][n - 1] === 'O') {
            dfs(board, i, n - 1);
        }
    }
    for (let j = 0; j < n; j++) {
        if (board[0][j] === 'O') {
            dfs(board, 0, j);
        }
        if (board[m - 1][j] === 'O') {
            dfs(board, m - 1, j);
        }
    }
    console.log(board);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X';
            } else if (board[i][j] === 'B') {
                board[i][j] = 'O';
            }
        }
    }

    console.log(board);
};

let board = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"]
];
solve(board);
