/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  let numCols = Math.ceil(s.length / (2 * numRows - 2)) * (numRows - 1);
  let N = Array.from({ length: numRows }, () =>
    Array.from({ length: numCols }, () => "")
  );
  let isVertical = true;
  let x = 0;
  let y = 0;
  for (let i = 0; i < s.length; i++) {
    let flag = (i + 1) % (2 * numRows - 2);
    if (flag > numRows || flag === 0) {
      isVertical = false;
    } else {
      isVertical = true;
    }
    N[y][x] = s[i];
    if (isVertical && y !== numRows - 1) {
      y++;
    } else {
      y--;
      x++;
    }
  }
  return N.flat().join("");
};

let s = "PAYPALISHIRING";
let numRows = 4;
console.log(convert(s, numRows));
