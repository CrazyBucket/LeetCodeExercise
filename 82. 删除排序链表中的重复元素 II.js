class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head;
  let dummy = new ListNode();
  dummy.next = head;
  let cur = dummy;
  while (cur.next && cur.next.next) {
    if (cur.next.val === cur.next.next.val) {
      let n = cur.next.val;
      while (cur.next && cur.next.val === n) {
        cur.next = cur.next.next;
      }
    } else {
      cur = cur.next;
    }
  }
  return dummy.next;
};
let head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(5);
head.next.next.next.next = new ListNode(5);
console.log(deleteDuplicates(head));
