/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

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
// console.log(head);

//哈希表+递归。时间内存拉满。。
// var hasCycle = function (head) {
//   if (head === null) return false;
//   let set = new Set();
//   let cycle = function (node) {
//     if (node !== null) {
//       if (set.has(node)) {
//         return true;
//       } else {
//         set.add(node);
//       }
//       return cycle(node.next);
//     } else {
//       return false;
//     }
//   };
//   return cycle(head);
// };

//双指针，如果有环，fast必然会和slow相遇
var hasCycle = function (head) {
  let fast = head;
  let slow = head;
  while (1) {
    try {
      slow = slow.next;
      fast = fast.next.next;
    } catch (e) {
      return false;
    }
    if (slow === fast) {
      return true;
    }
  }
};
console.log(hasCycle(head));
