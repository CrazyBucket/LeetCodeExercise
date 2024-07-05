/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) return '';
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  const gcdLength = gcd(str1.length, str2.length);
  return str1.substring(0, gcdLength);
};

let str1 = 'ABABAB',
  str2 = 'ABAB';
console.log(gcdOfStrings(str1, str2));
