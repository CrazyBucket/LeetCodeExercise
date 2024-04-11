/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

var isPalindrome = function (head) {
    let headList = []
    while (head) {
        headList.push(head.val)
        head = head.next
    }
    let reverseHead = [...headList]
    reverseHead.reverse()
    console.log(reverseHead, headList);
    if (JSON.stringify(headList) === JSON.stringify(reverseHead)) {
        return true
    }
    return false
};

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2)
head.next.next.next = new ListNode(1)
console.log(isPalindrome(head));