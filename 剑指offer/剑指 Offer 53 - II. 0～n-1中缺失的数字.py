from typing import List


class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        count = 0
        for i in range(len(nums)):
            if nums[i]==count:
                count+=1
        return count

solution = Solution()
print(solution.missingNumber([0,1,2,3,4,5,6,7,9]))