class Solution:
    def sumNums(self, n: int) -> int:
        return n and (n + self.sumNums(n - 1))


solution = Solution()
print(solution.sumNums(9))
