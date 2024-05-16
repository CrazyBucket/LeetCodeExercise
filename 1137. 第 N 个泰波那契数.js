/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  if (n === 0 || n === 1) {
    return n;
  }
  if (n === 2) {
    return 1;
  }
  if (n === 3) {
    return 2;
  }
  if (n === 4) {
    return 4;
  }
  return 2 * tribonacci(n - 1) - tribonacci(n - 4);
};
console.log(tribonacci(25));
