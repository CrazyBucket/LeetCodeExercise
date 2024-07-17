class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  return getLeaves(root1) === getLeaves(root2);
};
var getLeaves = function (root) {
  let leaves = [];
  var dfs = root => {
    if (!root) return;
    if (!root.left && !root.right) {
      leaves.push(root.val);
    }
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  console.log(leaves);

  return JSON.stringify(leaves);
};

// 构造第一棵树
const root1 = new TreeNode(1);
root1.left = new TreeNode(2);

// 构造第二棵树
const root2 = new TreeNode(2);
root2.right = new TreeNode(2);

console.log(leafSimilar(root1, root2));
