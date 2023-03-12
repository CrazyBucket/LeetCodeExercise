const countDifferentSubsequenceGCDs = (a: number[]): number => {
  const gcd = (x: number, y: number): number => (!y ? x : gcd(y, x % y));
  const mx = Math.max(...a);
  const c = new Array(mx + 1).fill(0);
  for (const v of a) {
    c[v]++;
  }
  let ans = 0;
  for (let i = 1; i <= mx; ++i) {
    let g = 0;
    for (let j = 1; j * i <= mx; ++j) {
      if (!c[j * i]) continue;
      g = gcd(g, j);
      if (g === 1) break;
    }
    ans += g === 1 ? 1 : 0;
  }
  return ans;
};
