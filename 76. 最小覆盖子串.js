/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length < t.length) {
    return "";
  }
  let map = new Map();

  for (let i = 0; i < t.length; i++) {
    if (map.has(t[i])) {
      map.set(t[i], map.get(t[i]) + 1);
    } else {
      map.set(t[i], 1);
    }
  }
  let window = new Map();
  let min = Infinity;
  let left = 0,
    right = 0;
  let minLeft = 0;
  let have = 0; //window内有的数量
  let need = map.size; //需要的种类数
  while (right < s.length) {
    let c = s[right];
    let windowCount = window.get(c) || 0;
    window.set(c, windowCount + 1);
    if (map.has(c) && window.get(c) === map.get(c)) {
      have++;
    }
    //缩小left
    while (have === need) {
      if (right - left + 1 < min) {
        min = right - left + 1;
        minLeft = left;
      }
      let c2 = s[left];
      window.set(c2, window.get(c2) - 1);
      if (map.has(c2) && window.get(c2) < map.get(c2)) {
        have--;
      }
      left++;
    }
    right++;
  }
  return min === Infinity ? "" : s.substring(minLeft, minLeft + min);
};
let s = "ADOBECODEBANC",
  t = "ABC";
console.log(minWindow(s, t));
