from typing import List


class Solution:
    def camelMatch(self, queries: List[str], pattern: str) -> List[bool]:
        n = len(queries)
        res = [True] * n
        m = len(pattern)
        for i, query in enumerate(queries):
            p = 0
            for q in query:
                if p < m and q == pattern[p]:
                    p += 1
                elif q.isupper():
                    res[i] = False
                    break
            if p < m:
                res[i] = False
        return res


solution = Solution()
print(solution.camelMatch(["CompetitiveProgramming", "CounterPick", "ControlPanel"],
                          "CooP"))
