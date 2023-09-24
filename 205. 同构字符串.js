/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let S = new Map();
  let T = new Map();
  for (let i = 0; i < s.length; i++) {
    if (S.has(s[i]) || T.has(t[i])) {
      if (S.get(s[i]) !== T.get(t[i])) {
        return false;
      }
    }
    S.set(s[i], i);
    T.set(t[i], i);
  }
  console.log(S, T);

  return true;
};
s = "bbbaaaab";
t = "aaabbbab";
console.log(isIsomorphic(s, t));
console.log(s.indexOf("b", 3));
console.log(t.indexOf("a", 3));
