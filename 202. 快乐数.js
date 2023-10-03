/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let map = new Map();
  n = String(n);
  while (n !== "1") {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
      sum += Math.pow(n[i], 2);
    }
    if (map.has(n)) {
      return false;
    }
    map.set(n, sum);
    n = String(sum);
  }
  return true;
};
let n = 2;
console.log(isHappy(n));
