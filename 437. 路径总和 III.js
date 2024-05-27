class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let result = 0;
  const backtracking = (root, sum) => {
    if (!root) return;
    sum += root.val;
    if (sum === targetSum) {
      result++;
    }
    if (root.left) backtracking(root.left, sum);
    if (root.right) backtracking(root.right, sum);
  };
  const dfs = root => {
    if (!root) return;
    backtracking(root, 0);
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);

  return result;
};
const root = new TreeNode(
  10,
  new TreeNode(
    5,
    new TreeNode(3, new TreeNode(3), new TreeNode(-2)),
    new TreeNode(2, null, new TreeNode(1))
  ),
  new TreeNode(-3, null, new TreeNode(11))
);

const targetSum = 8;

console.log(pathSum(root, targetSum));
