//纯纯的字符串操作

// function reverseWords(s: string): string {
//   return s.trim().split(/\s+/).reverse().join(" ");
// }

// 答案：
function reverseWords(s: string): string {
  // 去除字符串前后空格
  s = s.trim();

  // 将字符串转换为字符数组
  const chars = s.split("");

  // 定义双指针，分别指向字符数组的头部和尾部
  let left = 0;
  let right = chars.length - 1;

  // 交换双指针所指向的字符
  while (left < right) {
    const temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp;
    left++;
    right--;
  }

  // 将字符数组转换为字符串，并以空格为分隔符拼接
  return chars.join("").split(/\s+/).reverse().join(" ");
}
