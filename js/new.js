const myNew = (Func, ...arg) => {
  let obj = {};
  obj.__proto__ = Func.prototype;
  let result = Func.apply(obj, arg);
  return result instanceof Object ? result : obj;
};
