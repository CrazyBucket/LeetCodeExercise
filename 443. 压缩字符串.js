/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  chars.push('🤨'); //多整一位
  let slow = 0,
    fast = slow + 1,
    ans = '';
  while (fast < chars.length) {
    if (chars[fast] !== chars[slow] || fast >= chars.length - 1) {
      let num = fast - slow;
      ans += chars[slow] + (num > 1 ? num : '');
      slow = fast;
    }
    fast++;
  }
  chars.length = ans.length;
  for (let i = 0; i < ans.length; i++) {
    chars[i] = ans[i];
  }
  return chars.length;
};
let chars = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
console.log(compress(chars));
