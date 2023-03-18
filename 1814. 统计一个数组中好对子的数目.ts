function countNicePairs(nums: number[]): number {
    let ans = 0;
    const hash = new Map();
    for (let i = 0; i < nums.length; i++) {
      let sub = nums[i] - ~~nums[i].toString().split("").reverse().join("");
      hash.has(sub) ? hash.set(sub, hash.get(sub) + 1) : hash.set(sub, 1);
    }
    for (let [key, value] of hash) {
      if (value > 1) {
        ans += value * value - value;
      }
    }
    return (ans / 2) % (1e9 + 7);
  }