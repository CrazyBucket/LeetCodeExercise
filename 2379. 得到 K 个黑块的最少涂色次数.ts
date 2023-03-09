function minimumRecolors(blocks: string, k: number): number {
  let n = blocks.length;
  let w: string[] = [];
  let s = blocks.split("");
  for (let i = 0; i < s.length - k + 1; i++) {
    w = s.slice(i, i + k);
    let b = w.join("");
    for (let j = 0; j < k; j++) {
      n = Math.min(n, b.split("W").length - 1);
    }
  }
  return n;
}
//直接用滑动窗口暴力解，成功超过0%的ts使用者，赢麻了
