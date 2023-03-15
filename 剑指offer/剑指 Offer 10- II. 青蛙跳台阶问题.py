class Solution:

    def __init__(self):
        self.dist = {0: 1, 1: 1, 2: 2}

    def numWays(self, n: int) -> int:
        mod = int(1e9 + 7)
        if n not in self.dist:
            for i in range(3, n + 1):
                self.dist[i] = self.dist[i - 1] + self.dist[i - 2]
        return self.dist[n] % mod


solution = Solution()
print(solution.numWays(2))
