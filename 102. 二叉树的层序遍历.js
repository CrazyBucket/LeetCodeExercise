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
var levelOrder = function (root) {
  let que = [];
  let res = [];
  if (root !== null) {
    que.push(root);
  }
  while (que.length !== 0) {
    let size = que.length;
    let level = [];
    while (size-- !== 0) {
      let node = que.shift();
      level.push(node.val);
      if (node.left !== null) {
        que.push(node.left);
      }
      if (node.right !== null) {
        que.push(node.right);
      }
    }
    res.push(level);
  }
  return res;
};
console.log(levelOrder(tree));
