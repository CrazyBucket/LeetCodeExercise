class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const tree = new TreeNode(4);
tree.left = new TreeNode(2);
tree.right = new TreeNode(7);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(3);

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  if (val > root.val) {
    return searchBST(root.right, val);
  } else {
    return searchBST(root.left, val);
  }
};
console.log(searchBST(tree, 2));
