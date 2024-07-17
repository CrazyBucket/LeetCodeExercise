/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let ans = 0;
  let helper = 0;
  let set = new Set(['a', 'e', 'i', 'o', 'u']);
  for (let i = 0; i < k; i++) {
    if (set.has(s[i])) {
      ans++;
    }
    if (i > 0) {
      helper = helper + set.has(s[i]);
    }
  }
  for (let i = k; i < s.length; i++) {
    ans = Math.max(helper + set.has(s[i]), ans);
    if (ans === k) return k;
    helper = helper - set.has(s[i - k + 1]) + set.has(s[i]);
  }
  return ans;
};
let s = 'abciiidef',
  k = 3;
console.log(maxVowels(s, k));
