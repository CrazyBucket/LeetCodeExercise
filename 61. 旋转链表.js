/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
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
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head;
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }
  k = k % length;
  if (k === 0) return head;
  // 找到新的尾节点，新的尾节点应该是第 (length - k - 1) 个节点
  let newTail = head;
  for (let i = 0; i < length - k - 1; i++) {
    newTail = newTail.next;
  }

  // 新的头节点是新的尾节点的下一个节点
  let newHead = newTail.next;

  // 将新的尾节点的next置为null
  newTail.next = null;

  // 将原尾节点的next指向原头节点
  tail.next = head;

  return newHead;
};
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
let k = 2;
console.log(rotateRight(head, k));
