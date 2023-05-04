class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        sum = 0
        for index, i in enumerate(columnTitle):
            sum = (ord(i) - 64) * (26 ** (len(columnTitle) - index - 1)) + sum
        return sum


solution = Solution()
print(solution.titleToNumber("FXSHRXW"))
