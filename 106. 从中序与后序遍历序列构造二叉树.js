class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (inorder.length === 0 || postorder.length === 0) {
    return null;
  }
  let newHead = postorder[postorder.length - 1];
  let newTree = new TreeNode(newHead);
  let i = inorder.indexOf(newHead);
  let leftInorder = inorder.slice(0, i);
  let rightInorder = inorder.slice(i + 1);
  let leftPostorder = postorder.slice(0, leftInorder.length);
  let rightPostorder = postorder.slice(
    leftInorder.length,
    postorder.length - 1
  );
  newTree.left = buildTree(leftInorder, leftPostorder);
  newTree.right = buildTree(rightInorder, rightPostorder);
  return newTree;
};
let inorder = [9, 3, 15, 20, 7],
  postorder = [9, 15, 7, 20, 3];
console.log(buildTree(inorder, postorder));
