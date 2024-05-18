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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let result = [];
  const dfs = (root, k) => {
    if (root) {
      dfs(root.left, k);
      result.push(root.val);
      dfs(root.right, k);
    }
  };
  dfs(root);
  return result[k - 1];
};
const node1 = new TreeNode(1);
const node4 = new TreeNode(4);
const node6 = new TreeNode(6, node4, new TreeNode(7));
const node13 = new TreeNode(13);
const node14 = new TreeNode(14, node13);
const node3 = new TreeNode(3, node1, node6);
const node10 = new TreeNode(10, null, node14);
const root = new TreeNode(8, node3, node10);
console.log(kthSmallest(root, 5));
