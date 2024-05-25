class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }
  let head = preorder[0];
  let newTree = new TreeNode(head);
  let i = inorder.indexOf(head);
  let leftInorder = inorder.slice(0, i);
  let rightInorder = inorder.slice(i + 1);
  let leftPreorder = preorder.slice(1, leftInorder.length + 1);
  let rightPreorder = preorder.slice(leftInorder.length + 1);
  newTree.left = buildTree(leftPreorder, leftInorder);
  newTree.right = buildTree(rightPreorder, rightInorder);
  return newTree;
};
let preorder = [3, 9, 20, 15, 7],
  inorder = [9, 3, 15, 20, 7];
console.log(buildTree(preorder, inorder));
