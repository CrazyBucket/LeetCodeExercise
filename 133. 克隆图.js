class Node {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}

// 手动创建节点
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

// 建立连接关系
node1.neighbors.push(node2);
node1.neighbors.push(node4);

node2.neighbors.push(node1);
node2.neighbors.push(node3);

node3.neighbors.push(node2);
node3.neighbors.push(node4);

node4.neighbors.push(node1);
node4.neighbors.push(node3);
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  let visible = new Map();
  const dfs = node => {
    if (!node) return;
    if (visible.has(node)) {
      return visible.get(node);
    }
    const newNode = new Node(node.val);
    visible.set(node, newNode);
    for (let neighbor of node.neighbors) {
      newNode.neighbors.push(dfs(neighbor));
    }
    return newNode;
  };

  return dfs(node);
};
console.log(cloneGraph(node1));
