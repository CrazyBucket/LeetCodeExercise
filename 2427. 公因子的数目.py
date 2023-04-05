class Solution:
    # 求最大公约数
    def gcd(self, a, b):
        if b == 0:
            return a
        return self.gcd(b, a % b)

    def commonFactors(self, a: int, b: int) -> int:
        g = self.gcd(a, b)
        return sum(g % x == 0 for x in range(1, g + 1))


solution = Solution()
print(solution.commonFactors(12, 6))
