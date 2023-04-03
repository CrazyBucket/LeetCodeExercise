from typing import List


# 自己写的垃圾代码：
# class Solution:
#     def constructArr(self, a: List[int]) -> List[int]:
#         pre = []
#         after = []
#         x = y = 1
#         for i in range(len(a)):
#             if i != len(a) - 1:
#                 x = x * a[i]
#                 y = y * a[len(a) - i - 1]
#                 pre.append(x)
#                 after.append(y)
#         pre = [1] + pre
#         after = [1] + after
#         after.reverse()
#         ans = []
#         for i in range(len(a)):
#             ans.append(pre[i] * after[i])
#         return ans

# ai优化的：
class Solution:
    def constructArr(self, a: List[int]) -> List[int]:
        ans = [1] * len(a)
        for i in range(1, len(a)):
            ans[i] = ans[i - 1] * a[i - 1]
        r = 1
        for i in range(len(a) - 1, -1, -1):
            ans[i] *= r
            r *= a[i]
        return ans


solution = Solution()
print(solution.constructArr([1, 2, 3, 4, 5]))
