class Solution:
    def hammingWeight(self, n: int) -> int:
        print(bin(n))
        return str(bin(n)).count('1')


solution = Solution()
print(solution.hammingWeight(0b000000000000000000000000011011))
