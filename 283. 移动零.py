from typing import List


class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        zero_count = 0
        for i in range(len(nums)):
            if nums[i] == 0:
                zero_count += 1
            else:
                nums[i - zero_count] = nums[i]
        if zero_count != 0:
            nums[-zero_count:] = [0] * zero_count
        print(nums)


solution = Solution()
print(solution.moveZeroes([1]))
