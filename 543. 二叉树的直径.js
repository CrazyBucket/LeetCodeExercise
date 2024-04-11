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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let ans = 0
    var dfs = function (root) {
        if (!root) {
            return 0
        }
        let left = dfs(root.left)
        let right = dfs(root.right)
        ans = Math.max(ans, left + right)
        return Math.max(left, right) + 1
    }
    dfs(root)
    return ans
};
let root = new TreeNode(1);
root.left = new TreeNode(2);
// root.right = new TreeNode(3);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);
console.log(diameterOfBinaryTree(root));