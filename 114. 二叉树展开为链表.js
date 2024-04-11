/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
var flatten = function (root) {
    if (!root) return;
    let dummy = new TreeNode();
    let current = dummy;
    var dfs = function (node) {
        if (!node) return;
        current.right = new TreeNode(node.val);
        current = current.right;
        dfs(node.left);
        dfs(node.right);
    };
    dfs(root);
    root.left = null;
    root.right = dummy.right.right;
    return root;
};

let root = new TreeNode(3);
root.left = new TreeNode(2);
root.right = new TreeNode(4);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
console.log(flatten(root));