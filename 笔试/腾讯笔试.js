const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let nums = [];
    while ((line = await readline())) {
        let tokens = line.split(" ");
        nums.push(tokens.map(Number));
    }
    let len = nums[0][0];
    nums = nums[1];
    let result = [];
    // console.log(len, nums);
    if (len < 1) return 0;
    let maxLen = 1;
    for (let i = 0; i < len; i++) {
        if (result.length < 1) {
            result.push([nums[i]]);
        } else {
            for (let j = 0; j < result.length; j++) {
                let last = result[j][result[j].length - 1];
                if (last < nums[i] && nums[i] % last === 0) {
                    result.push([...result[j], nums[i]]);
                    maxLen = Math.max(maxLen, result[j].length + 1);
                }
            }
            result.push([nums[i]]);
        }
    }
    // console.log(result);
    console.log(maxLen);
})();
// 给出大小为的序列 = ;
// 找出满足以下两个条件的子序列的最大长度：
// 子序列满足严格递增，即:。
// 子序列中，后一个数是前一个数的整数倍。
// 请你求出满足上述条件的子序列长度的最大值。
// 输入描述
// 第一行输入一个正整数。
// 随后一行，给出个数,。
// {3 \le N \le 2 \times 10^5}
// {1 \leq a_i \le 2 \times 10^5 }
