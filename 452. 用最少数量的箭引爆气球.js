/**
 * @param {number[][]} points
 * @return {number}
 */
//贪心
var findMinArrowShots = function (points) {
    points = points.sort((a, b) => a[1] - b[1]);
    let arrows = 1; // 初始化箭的数量为 1，因为第一个区间的结束值肯定要引爆
    let currentEnd = points[0][1];

    // 遍历排序后的区间数组
    for (let i = 1; i < points.length; i++) {
        const start = points[i][0];
        // 如果箭的位置小于等于当前区间的起始值，说明需要增加箭的数量，并更新箭的位置为当前区间的结束值
        if (currentEnd < start) {
            arrows++;
            currentEnd = points[i][1];
        }
        // 如果箭的位置大于当前区间的起始值，说明无需增加箭的数量，但更新箭的位置为当前区间的结束值
    }

    return arrows;
};

console.log(findMinArrowShots([[3, 9], [7, 12], [3, 8], [6, 8], [9, 10], [2, 9], [0, 9], [3, 9], [0, 6], [2, 8]]));