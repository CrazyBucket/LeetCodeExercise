/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  return Math.min([...new Set(candyType)].length, candyType.length / 2);
};
let candyType = [1, 1, 2, 2, 3, 3];
console.log(distributeCandies(candyType));
