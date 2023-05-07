class Solution:
    def reverseBits(self, n: int) -> int:
        x = bin(n)[2:].zfill(32)
        return int(x[::-1], 2)


solution = Solution()
print(solution.reverseBits(0b00000010100101000001111010011100))
