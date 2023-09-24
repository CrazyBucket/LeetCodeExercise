/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let p = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[p] === t[i]) {
      p++;
    }
  }
  return p === s.length;
};
