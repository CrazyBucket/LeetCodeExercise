var jump = function (nums) {
    if (nums.length < 2) {
        return 0;
    }

    let steps = 0;
    let maxReach = 0;
    let curReach = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        maxReach = Math.max(maxReach, i + nums[i]);

        if (i === curReach) {
            steps++;
            console.log(curReach, maxReach);
            curReach = maxReach;
        }
    }

    return steps;
};

let nums = [2, 3, 1, 1, 4]
console.log(jump(nums));
