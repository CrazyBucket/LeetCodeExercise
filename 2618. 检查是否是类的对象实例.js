/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  if (obj === null || obj === void 0 || typeof classFunction !== "function")
    return false;
  while (Object.getPrototypeOf(obj)) {
    if (Object.getPrototypeOf(obj) === classFunction.prototype) return true;
    obj = Object.getPrototypeOf(obj);
  }
  return false;
};
console.log(checkIfInstanceOf(5n, Object));
