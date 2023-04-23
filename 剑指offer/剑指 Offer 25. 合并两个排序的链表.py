# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeTwoLists(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()  # 创建一个哑节点作为合并后链表的头结点
        cur = dummy  # 创建一个指针指向合并后链表的最后一个节点
        while l1 and l2:
            if l1.val < l2.val:
                cur.next = l1  # 将l1中的节点添加到合并后链表的末尾
                l1 = l1.next  # 移动l1指针
            else:
                cur.next = l2  # 将l2中的节点添加到合并后链表的末尾
                l2 = l2.next  # 移动l2指针
            cur = cur.next  # 移动合并后链表的指针
        cur.next = l1 or l2  # 将剩余的节点添加到合并后链表的末尾
        return dummy.next  # 返回合并后链表的头结点


node1 = ListNode(1)
node2 = ListNode(2)
node3 = ListNode(3)
node4 = ListNode(1)
node5 = ListNode(3)
node6 = ListNode(4)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
solution = Solution()
print(solution.mergeTwoLists(node1, node4))
