class Solution:
    def add(self, a: int, b: int) -> int:
        while b != 0:
            carry = a & b
            a = a ^ b
            b = carry << 1
        return a


solution = Solution()
print(solution.add(2, 5))
