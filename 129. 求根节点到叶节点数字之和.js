/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  const dfs = (node, currentNumber) => {
    if (!node) {
      return 0;
    }

    currentNumber = currentNumber * 10 + node.val;

    if (!node.left && !node.right) {
      return currentNumber;
    }

    const leftSum = dfs(node.left, currentNumber);
    const rightSum = dfs(node.right, currentNumber);

    return leftSum + rightSum;
  };

  return dfs(root, 0);
};
const node1 = new TreeNode(1);
const node4 = new TreeNode(4);
const node6 = new TreeNode(6, node4, new TreeNode(7));
const node13 = new TreeNode(13);
const node14 = new TreeNode(14, node13);
const node3 = new TreeNode(3, node1, node6);
const node10 = new TreeNode(10, null, node14);
const root = new TreeNode(8, node3, node10);
console.log(sumNumbers(root));
