/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 1 || strs[0].length === 0) {
    return strs[0];
  }
  for (let j = 0; j < strs[0].length; j++) {
    let pre = strs[0][j];
    for (let i = 1; i < strs.length; i++) {
      if (pre !== strs[i][j]) {
        if (j === 0) {
          return "";
        } else {
          return strs[0].slice(0, j);
        }
      }
    }
  }
  return strs[0];
};
let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
