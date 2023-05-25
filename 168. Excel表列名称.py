import math


class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        ans = ''
        while columnNumber > 0:
            columnNumber -= 1  # 将 1~26 映射为 0~25
            ans = chr(columnNumber % 26 + 65) + ans
            columnNumber //= 26
        return ans


solution = Solution()
print(solution.convertToTitle(52))
