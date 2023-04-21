class Solution:
    def gcd(self, a, b):
        if b == 0:
            return a
        return self.gcd(b, a % b)

    def smallestEvenMultiple(self, n: int) -> int:
        if n <= 2:
            return 2
        x = self.gcd(n, 2)
        if x == 1:
            return 2 * n
        return n


solution = Solution()
print(solution.smallestEvenMultiple(6))
