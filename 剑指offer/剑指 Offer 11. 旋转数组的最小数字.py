from typing import List


class Solution:
    def minArray(self, numbers: List[int]) -> int:
        return min(numbers)

solution = Solution()
print(solution.minArray([3,4,5,1,2]))
