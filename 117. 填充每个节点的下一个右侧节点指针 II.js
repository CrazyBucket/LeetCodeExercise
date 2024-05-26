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
  let queue = [root];
  while (queue.length > 0) {
    let pre = null;
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      if (pre) {
        pre.next = currentNode;
      }
      pre = currentNode;
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

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

console.log(connect(root));
