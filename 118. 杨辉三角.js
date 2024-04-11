/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 0) return []
    if (numRows === 1) return [[1]]
    if (numRows === 2) return [[1], [1, 1]]
    if (numRows === 3) return [[1], [1, 1], [1, 2, 1]]
    if (numRows === 4) return [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]
    let result = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]
    for (let i = 4; i < numRows; i++) {
        result.push(new Array(i + 1).fill(1));
        for (let j = 1; j < i; j++) {
            result[i][j] = result[i - 1][j - 1] + result[i - 1][j]
        }
    }
    return result
};
console.log(generate(5));