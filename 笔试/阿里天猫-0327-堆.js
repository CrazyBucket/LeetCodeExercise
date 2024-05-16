// 输入m,n分别代表账号数和比赛数
// 然后是两个数组账号数组和比赛数组
// 账号数组是当前账号的分，比赛是一局游戏获得的分数
// 有个高手，每次只会用当前分数最低的账号游戏，求每场比赛后当前最高分的号
function getMaxScores(m, n, accounts, matches) {
    accounts.sort((a, b) => a - b);
    let maxScores = [];
    let minHeap = [...accounts];

    for (let i = 0; i < n; i++) {
        let minScore = minHeap.shift();
        let matchScore = matches[i];

        // 更新账号分数并重新维护最小堆
        let newScore = minScore + matchScore;
        minHeap.push(newScore);
        minHeap.sort((a, b) => a - b);

        maxScores.push(minHeap[minHeap.length - 1]);
    }

    return maxScores;
}

// 示例输入
const m = 5;
const n = 6;
const accounts = [1000, 2000, 1500, 1145, 2170];
const matches = [20, 30, 40, 50, 60, 200, 10000];

console.log(getMaxScores(m, n, accounts, matches));
