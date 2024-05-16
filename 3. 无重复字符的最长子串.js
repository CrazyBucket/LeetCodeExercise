/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  let start = 0;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let end = s[i];
    if (map.has(end)) {
      start = Math.max(map.get(end) + 1, start);
    }
    map.set(end, i);
    ans = Math.max(ans, i - start + 1);
  }
  return ans;
};
let s = "abcabcbbiuyt";

console.log(lengthOfLongestSubstring(s));
