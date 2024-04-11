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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    var dfs = function (root, result) {
        if (!root) {
            return false
        }
        result += root.val
        if (!root.left && !root.right) {
            return result === targetSum
        }
        return dfs(root.left, result) || dfs(root.right, result)
    }
    if (root) {
        return dfs(root, 0)
    }
    return false
};