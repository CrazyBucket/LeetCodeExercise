class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);

// console.log(tree);
var rightSideView = function (root) {
  let res = [];
  let dfs = function (node, depth) {
    if (node === null) {
      return;
    }
    if (depth === res.length) {
      res.push(node.val);
    }
    dfs(node.right, depth + 1);
    dfs(node.left, depth + 1);
  };
  dfs(root, 0);
  return res;
};
console.log(rightSideView(tree));
