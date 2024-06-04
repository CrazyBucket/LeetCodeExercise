Function.prototype.myCall = function (context = window, ...args) {
  if (this === Function.prototype) {
    return undefined; // 用于防止 Function.prototype.myCall() 直接调用
  }
  const key = Symbol(); // 通过创建一个独一无二的 Symbol 来作为属性名，确保不会与 context 对象上已有的属性发生冲突
  context[key] = this;
  const result = context[key](...args); // 这里将当前函数（也就是 myCall 被调用时的 this）赋值给 context 对象的 [key] 属性。这样，在调用 context[key] 时，this 将指向 context 对象。然后，使用提供的参数调用函数，并保存结果
  delete context[key];
  return result;
};
