var trap = function (height) {
    let volume = 0; // 存储总体积
    let stack = []; // 存储柱子索引
    for (let i = 0; i < height.length; i++) {
        // 当前柱子高度大于栈顶柱子高度，说明存在低洼区域
        while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
            let top = stack.pop(); // 取出栈顶柱子索引
            if (stack.length === 0) break; // 如果栈空，则没有左边界，跳出循环
            let distance = i - stack[stack.length - 1] - 1; // 计算低洼区域的宽度
            let boundedHeight = Math.min(height[i], height[stack[stack.length - 1]]) - height[top]; // 计算低洼区域的高度
            volume += distance * boundedHeight; // 计算低洼区域的体积并累加到总体积中
        }
        stack.push(i); // 将当前柱子索引入栈
    }
    return volume;
};

// 测试
let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height)); // 输出6
