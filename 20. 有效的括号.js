/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else if (s[i] === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    } else if (s[i] === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
};

let s = "({}{]})";
console.log(isValid(s));
