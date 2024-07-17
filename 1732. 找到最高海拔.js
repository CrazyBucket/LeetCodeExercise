/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let ans = 0;
  let real = 0;
  for (let i = 0; i < gain.length; i++) {
    ans = Math.max(ans, real + gain[i]);
    real += gain[i];
  }
  return ans;
};
let gain = [-5, 1, 5, 0, -7];
console.log(largestAltitude(gain));
