from typing import List


class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        nums.sort()
        for i in range(len(nums)):
            if i + 1 < len(nums):
                if nums[i] + 1 != nums[i + 1]:
                    return nums[i] + 1
        if 0 in nums:
            return len(nums)
        return 0


solution = Solution()
print(solution.missingNumber([1]))
