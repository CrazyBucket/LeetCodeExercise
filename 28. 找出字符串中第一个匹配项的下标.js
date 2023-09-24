/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function (haystack, needle) {
//   console.log(haystack.indexOf(needle));
//   return haystack.indexOf(needle);
// };
var strStr = function (haystack, needle) {
  return haystack.search(needle);
};
let haystack = "sadbutsad";
let needle = "z";
console.log(strStr(haystack, needle));
