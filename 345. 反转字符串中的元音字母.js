/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  s = s.split("");
  let left, right;
  left = 0;
  right = s.length - 1;
  const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  while (left < right) {
    if (set.has(s[left]) && set.has(s[right])) {
      [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
    } else if (set.has(s[left]) && !set.has(s[right])) {
      right--;
    } else if (!set.has(s[left]) && set.has(s[right])) {
      left++;
    } else {
      left++;
      right--;
    }
  }
  return s.join("");
};
let s = "leetcode";
console.log(reverseVowels(s));
