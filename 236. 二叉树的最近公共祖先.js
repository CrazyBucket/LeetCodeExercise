class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
  // 如果当前节点为空或等于p或q，直接返回当前节点
  if (!root || root === p || root === q) {
    return root;
  }

  // 递归搜索左子树
  const left = lowestCommonAncestor(root.left, p, q);
  // 递归搜索右子树
  const right = lowestCommonAncestor(root.right, p, q);

  // 如果左子树和右子树都找到了目标节点，当前节点就是最近公共祖先
  if (left && right) {
    return root;
  }
  // 如果只有一个子树找到了目标节点，返回那个子树的结果
  return left ? left : right;
}
// 示例二叉树
const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
const p = root.left; // 节点 5
const q = root.right; // 节点 1

console.log(lowestCommonAncestor(root, p, q).val); // 输出3
