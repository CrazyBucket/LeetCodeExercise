from typing import List


class Solution:
    def checkArithmeticSubarrays(self, nums: List[int], l: List[int], r: List[int]) -> List[bool]:
        ans = []
        for i in range(len(l)):
            ans.append(self.check(nums[l[i]:r[i] + 1]))
        return ans

    def check(self, nums: List[int]) -> bool:
        nums.sort()
        n = nums[1] - nums[0]
        for i in range(len(nums)):
            if i < len(nums) - 1:
                if nums[i] + n != nums[i + 1]:
                    return False
        return True


solution = Solution()
print(solution.checkArithmeticSubarrays([-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10], [0, 1, 6, 4, 8, 7],
                                        [4, 4, 9, 7, 9, 10]))
# 执行用时：
# 88 ms
# , 在所有 Python3 提交中击败了
# 63.29%
# 的用户
# 内存消耗：
# 14.9 MB
# , 在所有 Python3 提交中击败了
# 96.84%
# 的用户
# 通过测试用例：
# 102 / 102
