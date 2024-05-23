class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = head.next;
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head === null) return -1;
  let set = new Set();
  let cycle = function (node) {
    if (node !== null) {
      if (set.has(node)) {
        return node;
      } else {
        set.add(node);
      }
      return cycle(node.next);
    } else {
      return node;
    }
  };
  return cycle(head);
};
console.log(detectCycle(head));
