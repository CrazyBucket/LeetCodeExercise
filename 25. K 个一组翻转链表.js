class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head || k === 1) return head;
  let count = 0;
  let node = head;
  while (node && count < k) {
    node = node.next;
    count++;
  }
  if (count === k) {
    let reversedHead = reverse(head, k);
    head.next = reverseKGroup(node, k);
    return reversedHead;
  }
  return head;
};
var reverse = function (head, k) {
  if (!head) return head;
  let pre = null;
  while (k > 0) {
    let next = head.next;
    head.next = pre;
    pre = head;
    head = next;
    k--;
  }
  return pre;
};
let head = new ListNode(5);
head.next = new ListNode(1);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(999);
head.next.next.next.next.next = new ListNode(111);
head.next.next.next.next.next.next = new ListNode(9);
head.next.next.next.next.next.next.next = new ListNode(10);
console.log(reverseKGroup(head, 3));
