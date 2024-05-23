class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
let head = new ListNode(1);
head.next = new ListNode(3);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(0);

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) return head;
  let prev = null,
    slow = head,
    fast = head;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;
  return merge(sortList(head), sortList(slow));
};
var merge = function (left, right) {
  let tail = new ListNode();
  let dummy = tail;
  while (left && right) {
    if (left.val < right.val) {
      dummy.next = left;
      left = left.next;
    } else {
      dummy.next = right;
      right = right.next;
    }
    dummy = dummy.next;
  }
  if (left) {
    dummy.next = left;
  }
  if (right) {
    dummy.next = right;
  }
  return tail.next;
};
console.log(sortList(head));
