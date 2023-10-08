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

console.log(tree);
//中序遍历：左中右
var inorderTraversal = function (root) {
  let res = [];
  let traversal = function (root, res) {
    if (root !== null) {
      if (typeof root.left === "number") {
        res.push(root.left);
      } else if (root.left !== null) {
        traversal(root.left, res);
      }
      res.push(root.val);

      if (typeof root.right === "number") {
        res.push(root.right);
      } else if (root.right !== null) {
        traversal(root.right, res);
      }
    }
  };
  traversal(root, res);
  return res;
};
console.log(inorderTraversal(tree));
