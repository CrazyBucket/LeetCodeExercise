from collections import defaultdict
from typing import List


class Solution:
    def checkDistances(self, s: str, distance: List[int]) -> bool:
        d = defaultdict(int)
        for i, c in enumerate(s, 1):
            if d[c] and i - d[c] - 1 != distance[ord(c) - ord('a')]:
                return False
            d[c] = i
        return True


solution = Solution()
print(solution.checkDistances("abaccb", [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
