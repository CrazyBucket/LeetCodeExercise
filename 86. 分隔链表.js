class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let dummy1 = new ListNode();
  let dummy2 = new ListNode();
  let small = dummy1;
  let big = dummy2;
  while (head) {
    if (head.val < x) {
      small.next = head;
      small = small.next;
    } else {
      big.next = head;
      big = big.next;
    }
    head = head.next;
  }
  big.next = null;
  small.next = dummy2.next;
  return dummy1.next;
};
let head = new ListNode(5);
head.next = new ListNode(1);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(999);
console.log(partition(head, 4));
