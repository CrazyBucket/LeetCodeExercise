/**
 * @param {string[]} strs
 * @return {string[][]}
 */

//排序
var groupAnagrams = function (strs) {
  const map = new Map();
  for (const str of strs) {
    const sorted = str.split("").sort().join("");
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(str);
  }
  return Array.from(map.values());
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
