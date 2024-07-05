/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
  let sum = 0;
  x = x.toString();
  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }
  return x % sum === 0 ? sum : -1;
};
let x = 18;
console.log(sumOfTheDigitsOfHarshadNumber(x));
