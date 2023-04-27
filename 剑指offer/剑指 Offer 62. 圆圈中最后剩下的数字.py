# from typing import List


# 笑死，直接超时
# class Solution:
#     def returnList(self, l: List[int], m: int) -> List[int]:
#         while m > len(l):
#             m = m - len(l)
#         print(l[m:len(l)] + l[0:m - 1])
#         return l[m:len(l)] + l[0:m - 1]
#
#     def lastRemaining(self, n: int, m: int) -> int:
#         l = list(range(n))
#         while len(l) != 1:
#             l = self.returnList(l, m)
#         return l[0]

class Solution:
    def lastRemaining(self, n: int, m: int) -> int:
        f = 0
        for i in range(2, n + 1):
            f = (f + m) % i
        return f


solution = Solution()
print(solution.lastRemaining(5, 3))
