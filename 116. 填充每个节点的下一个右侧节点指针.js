class Node {
  constructor(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) {
    return null;
  }
  const dfs = (left, right) => {
    if (!left && !right) return;
    left.next = right;
    dfs(left.left, left.right);
    dfs(left.right, right.left);
    dfs(right.left, right.right);
  };
  dfs(root.left, root.right);
  return root;
};
// Level 0
const root = new Node(1);

// Level 1
root.left = new Node(2);
root.right = new Node(3);

// Level 2
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// The next pointers are already initialized to null as per your request.

console.log(connect(root));
