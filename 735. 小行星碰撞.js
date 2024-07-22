/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let left = []; // 负数，向左飞
  let right = []; // 正数，向右飞
  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] < 0) {
      while (right.length > 0) {
        if (right[right.length - 1] < -asteroids[i]) {
          // 向右飞行星质量较小，被摧毁，移出栈
          right.pop();
        } else if (right[right.length - 1] === -asteroids[i]) {
          // 两者质量相同，两个都爆炸
          right.pop();
          asteroids[i] = 0; // 设置当前左飞行星为0，表示它被爆炸
          break;
        } else {
          // 向右飞行星质量较大，当前左飞行星被毁灭
          asteroids[i] = 0; // 设置当前左飞行星为0，表示它被爆炸
          break;
        }
      }
      if (asteroids[i] !== 0) {
        left.push(asteroids[i]); // 没有碰撞的左飞行星
      }
    } else {
      right.push(asteroids[i]);
    }
  }
  return [...left, ...right];
};
let asteroids = [9, -9];
console.log(asteroidCollision(asteroids));
