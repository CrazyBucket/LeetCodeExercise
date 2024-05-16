// 现在有一个数组, 内有object, 如下
const arr = [
  { value: 532, lable: 1, type: "a" },
  { value: 132, lable: 24, type: "b" },
  { value: 432, lable: 13, type: "b" },
  { value: 1812, lable: 5, type: "b" },
  { value: 1932, lable: 8, type: "c" },
  { value: 132, lable: 4, type: "a" },
  { value: 2462, lable: 9, type: "a" },
];
// 按 type 将如上结构数据归类到一个对象结构中，并给每个type内的数据，按 value 值 大小，正序排序
// 如上面的数组将输出如下结果：
// (注意：type值的数量不固定，实现方法请考虑通用性)
// const data = {
//   a: [
//     { value: 132, label: 4, type: "a" },
//     { value: 532, label: 1, type: "a" },
//     { value: 2462, label: 9, type: "a" },
//   ],
//   b: [
//     { value: 132, label: 24, type: "b" },
//     { value: 432, label: 13, type: "b" },
//     { value: 1812, label: 5, type: "b" },
//   ],
//   c: [{ value: 1932, label: 8, type: "c" }],
// };
const sortObj = arr => {
  const ans = {};
  for (const item of arr) {
    console.log(item);
    if (ans[item.type]) {
      ans[item.type].push(item);
    } else {
      ans[item.type] = [item];
    }
  }
  for (const key in ans) {
    ans[key].sort((a, b) => a.value - b.value);
  }
  return ans;
};
sortObj(arr);
