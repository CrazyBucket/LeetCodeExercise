/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0])
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i + 1]) {
            if (intervals[i][1] >= intervals[i + 1][0]) {
                intervals[i][1] = Math.max(intervals[i + 1][1], intervals[i][1])
                intervals.splice(i + 1, 1)
                i--
            }
        }
    }
    return intervals
};

console.log(merge([[1, 4], [0, 3]]));