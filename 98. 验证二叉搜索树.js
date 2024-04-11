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
 * @return {boolean}
 */
var isValidBST = function (root) {
    var dfs = function (root, max, min) {
        if (!root) return true
        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
            return false
        }
        return dfs(root.left, root.val, min) && dfs(root.right, max, root.val)
    }
    return dfs(root, null, null)
};
let root = new TreeNode(3);
root.left = new TreeNode(2);
root.right = new TreeNode(4);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
console.log(isValidBST(root));