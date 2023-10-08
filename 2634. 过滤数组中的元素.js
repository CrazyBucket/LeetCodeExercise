/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) res.push(arr[i]);
  }
  return res;
};
let arr = [1, 2, 3],
  fn = function firstIndex(n, i) {
    return i === 0;
  };
console.log(filter(arr, fn));
