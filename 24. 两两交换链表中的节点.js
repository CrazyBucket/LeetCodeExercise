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
// var swapPairs = function (head) {
//   let dummy = new ListNode();
//   dummy.next = head;
//   let cur = dummy;
//   while (cur.next && cur.next.next) {
//     let first = cur.next;
//     let second = cur.next.next;
//     first.next = second.next;
//     second.next = first;
//     cur.next = second;
//     cur = first;
//   }
//   return dummy.next;
// };
//递归
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let next = new ListNode();
  next = head.next;
  head.next = swapPairs(next.next);
  next.next = head;
  return next;
};
let head = new ListNode(5);
head.next = new ListNode(1);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(999);
console.log(swapPairs(head));
