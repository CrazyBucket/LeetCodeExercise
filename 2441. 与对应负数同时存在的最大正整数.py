from typing import List


class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        nums.sort(reverse=True)
        for i in nums:
            if -i in nums:
                return i
        return -1


solution = Solution()
print(solution.findMaxK([-10, 8, 6, 7, -2, -3]))
