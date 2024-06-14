/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  if (s === '') {
    return '';
  }
  let res = '';
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      res += s[i];
    } else {
      let count = '';
      while (!isNaN(s[i])) {
        count += s[i];
        i++;
      }
      let content = '';
      let stack = [];
      i++;
      while (true) {
        if (s[i] === '[') {
          stack.push(s[i]);
        } else if (s[i] === ']') {
          if (stack.length === 0) {
            break;
          }
          stack.pop();
        }
        content += s[i];
        i++;
      }
      res += decodeString(content).repeat(count);
    }
  }
  return res;
};
let s = '2[abc]3[cd]ef';
console.log(decodeString(s));
