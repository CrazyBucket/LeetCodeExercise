from typing import List


class Solution:
    def getLeastNumbers(self, arr: List[int], k: int) -> List[int]:
        arr.sort()
        return arr[0:k]


solution = Solution()
print(solution.getLeastNumbers([0, 1, 2, 1], 2))
