# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def reversePrint(self, head: ListNode):
         # 反转链表
        prev = None
        cur = head
        while cur:
            next_node = cur.next
            cur.next = prev
            prev = cur
            cur = next_node
        # 输出反转后链表的值
        res = []
        while prev:
            res.append(prev.val)
            prev = prev.next
        return res


head = ListNode(1)
head.next = ListNode(3)
head.next.next = ListNode(2)
solution = Solution()
result = solution.reversePrint(head)
print(result)