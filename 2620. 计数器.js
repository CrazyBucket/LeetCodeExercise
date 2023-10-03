/**
 * @param {number} n
 * @return {Function} counter
 */
//闭包
var createCounter = function (n) {
  return function () {
    return n++;
  };
};

const counter = createCounter(10);
counter(); // 10
counter(); // 11
counter(); // 12
console.log(counter());
