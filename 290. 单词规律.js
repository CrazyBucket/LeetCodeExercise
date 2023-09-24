/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let res = pattern.split("");
  let ans = s.split(" ");
  if (res.length != ans.length) {
    return false;
  }
  for (let i = 0; i < res.length; i++) {
    if (res.indexOf(res[i]) != ans.indexOf(ans[i])) {
      return false;
    }
  }
  return true;
};
let pattern = "abba";
let s = "dog cat cat dog";
console.log(wordPattern(pattern, s));
