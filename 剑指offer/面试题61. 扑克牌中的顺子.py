from typing import List


class Solution:
    def isStraight(self, nums: List[int]) -> bool:
        nums.sort()
        n = nums.count(0)
        nums = nums[n:5]
        for i in range(len(nums)):
            if i < len(nums) - 1:
                if nums[i] + 1 != nums[i + 1]:
                    if n == 0:
                        return False
                    if n == 1:
                        if nums[i] + 2 != nums[i + 1]:
                            return False
                        else:
                            n -= 1
                    if n == 2:
                        if nums[i] + 2 != nums[i + 1]:
                            if nums[i] + 3 != nums[i + 1]:
                                return False
                            else:
                                n -= 2
                        else:
                            n -= 1
        return True


solution = Solution()
print(solution.isStraight([0, 7, 10, 4, 5]))
