/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var getIntersectionNode = function (headA, headB) {
    let set = new Set()
    while (headA) {
        set.add(headA)
        headA = headA.next
    }
    while (headB) {
        if (set.has(headB)) {
            return headB
        }
        headB = headB.next
    }
    return null
};

let listA = new ListNode(4);
listA.next = new ListNode(1);
listA.next.next = new ListNode(8);
listA.next.next.next = new ListNode(4);
listA.next.next.next.next = new ListNode(5);

let listB = new ListNode(5);
listB.next = new ListNode(6);
listB.next.next = new ListNode(1);
listB.next.next.next = listA.next.next;

console.log(getIntersectionNode(listA, listB));