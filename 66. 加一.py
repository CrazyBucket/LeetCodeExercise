from typing import List


class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        return list(map(int, str(int(''.join(map(str, digits))) + 1)))


solution = Solution()
print(solution.plusOne([4, 3, 4, 9]))
