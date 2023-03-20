function minMaxGame(nums: number[]): number | number[] {
  if (nums.length === 1) {
    return nums[0];
  }
  let flag = true;
  let newNums: number[] = [];
  for (let i = 0; i < nums.length >> 1; i++) {
    if (flag) {
      newNums = [...newNums, Math.min(nums[2 * i], nums[2 * i + 1])];
      flag = !flag;
    } else {
      newNums = [...newNums, Math.max(nums[2 * i], nums[2 * i + 1])];
      flag = !flag;
    }
  }
  return minMaxGame(newNums);
}
