/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let arr1 = version1.split(".").map(Number);
  let arr2 = version2.split(".").map(Number);

  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (arr1[i] && arr2[i]) {
      if (arr1[i] !== arr2[i]) {
        if (arr1[i] > arr2[i]) {
          return 1;
        } else {
          return -1;
        }
      }
    } else if (!arr1[i]) {
      if (arr2[i] > 0) {
        return -1;
      }
    } else if (!arr2[i]) {
      if (arr1[i] > 0) {
        return 1;
      }
    }
  }
  return 0;
};

let version1 = "1.05",
  version2 = "1.1";

console.log(compareVersion(version1, version2));
