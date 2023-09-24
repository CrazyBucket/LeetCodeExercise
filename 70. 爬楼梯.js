/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let memo = new Map();
  memo.set(0, 0);
  memo.set(1, 1);
  memo.set(2, 2);
  memo.set(3, 3);
  function climb(n) {
    if (memo.has(n)) {
      return memo.get(n);
    } else {
      let result;
      if (n <= 2) {
        result = n;
      } else {
        result = climb(n - 1) + climb(n - 2);
      }
      memo.set(n, result);
      return result;
    }
  }
  return climb(n);
};
console.log(climbStairs(45));
