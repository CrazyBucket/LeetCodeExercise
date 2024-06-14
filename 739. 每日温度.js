/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
//超时
// var dailyTemperatures = function (temperatures) {
//   let result = [];
//   for (let i = 0; i < temperatures.length; i++) {
//     let count = 0;
//     while (temperatures[i + count]) {
//       if (temperatures[i + count] > temperatures[i]) {
//         result[i] = count;
//         break;
//       }
//       count++;
//     }
//     if (!temperatures[i + count]) {
//       result[i] = 0;
//     }
//   }
//   return result;
// };
var dailyTemperatures = function (temperatures) {
  let result = new Array(temperatures.length).fill(0);
  let stack = [];

  for (let i = temperatures.length - 1; i >= 0; i--) {
    // 弹出所有比当前温度低的温度的索引
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] <= temperatures[i]
    ) {
      stack.pop();
    }

    // 如果栈不为空，说明栈顶的温度是下一个更高的温度
    if (stack.length > 0) {
      result[i] = stack[stack.length - 1] - i;
    }

    // 将当前温度的索引压入栈中
    stack.push(i);
  }

  return result;
};

let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures)); // Output: [1, 1, 4, 2, 1, 1, 0, 0]
