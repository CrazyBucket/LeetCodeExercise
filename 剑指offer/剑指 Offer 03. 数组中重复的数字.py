from typing import List


class Solution:
    def findRepeatNumber(self, nums: List[int]) -> int:
        num_dict = {}
        for num in nums:
            if num in num_dict:
                return num
            num_dict[num] = 1
            
solution = Solution()
print(solution.findRepeatNumber([3,4,2,1,1,0]))