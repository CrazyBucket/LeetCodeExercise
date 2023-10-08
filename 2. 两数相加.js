/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const list1 = new ListNode(2);
list1.next = new ListNode(4);
list1.next.next = new ListNode(3);
const list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);

var addTwoNumbers = function (l1, l2) {
  let ans = new ListNode();
  let ten = 0;
  let fn = function (l1, l2, ans) {
    if (l1 !== null || l2 !== null) {
      let sum = ten;
      if (l1 !== null) {
        sum += l1.val;
        l1 = l1.next;
      }
      if (l2 !== null) {
        sum += l2.val;
        l2 = l2.next;
      }
      ten = sum > 9 ? 1 : 0;
      ans.next = new ListNode(sum % 10);
      return fn(l1, l2, ans.next);
    }
    if (ten > 0) {
      ans.next = new ListNode(1);
    }
  };
  fn(l1, l2, ans);
  return ans.next;
};
console.log(addTwoNumbers(list1, list2));
