class Solution:
    def hammingWeight(self, n: int) -> int:
        return bin(n).count('1')


solution = Solution()
print(solution.hammingWeight(111))
