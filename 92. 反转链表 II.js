/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
var reverseBetween = function (head, left, right) {
    // 创建一个虚拟节点，以处理 left 为头节点的情况
    const dummy = new ListNode(-1);
    dummy.next = head;

    let prev = dummy;

    // 找到 left 节点的前一个节点
    for (let i = 0; i < left - 1; i++) {
        prev = prev.next;
    }

    // 开始反转链表的一部分
    let curr = prev.next;
    for (let i = 0; i < right - left; i++) {
        const next = curr.next;
        curr.next = next.next;
        next.next = prev.next;
        prev.next = next;
    }

    return dummy.next;
};

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
console.log(reverseBetween(head, 2, 4));