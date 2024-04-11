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
 * @return {number}
 */

class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

var getMinimumDifference = function (root) {
    let result = []
    let minDiff = Infinity;
    let inorderTraversal = function (root, result) {
        if (root !== null) {
            inorderTraversal(root.left, result)
            result.push(root.val)
            inorderTraversal(root.right, result)
        }
    }
    inorderTraversal(root, result)
    for (let i = 1; i < result.length; i++) {
        let diff = result[i] - result[i - 1];
        if (diff < minDiff) {
            minDiff = diff;
        }
    }
    return minDiff
};
console.log(getMinimumDifference(root));