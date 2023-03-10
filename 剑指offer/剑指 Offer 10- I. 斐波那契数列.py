class Solution:
    def __init__(self):
        self.dist = {0: 0, 1: 1}

    def fib(self, n: int) -> int:
        mod = int(1e9 + 7)
        if n not in self.dist:
            for i in range(2, n + 1):
                self.dist[i] = self.dist[i - 1] + self.dist[i - 2]
        return self.dist[n] % mod


solution = Solution()
print(solution.fib(50))
