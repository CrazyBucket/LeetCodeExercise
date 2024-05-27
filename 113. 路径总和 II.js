/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let result = [];
  const dfs = (root, cur, sum) => {
    if (!root) return;
    cur.push(root.val);
    sum += root.val;
    if (!root.left && !root.right && sum === targetSum) {
      result.push(cur.slice());
    }
    if (root.left) dfs(root.left, cur.slice(), sum);
    if (root.right) dfs(root.right, [...cur], sum);
    cur.pop();
  };
  dfs(root, [], 0);
  return result;
};
