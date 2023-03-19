from typing import List


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        n = len(nums)
        dp = [0] * n  # dp[i] 表示以 nums[i] 结尾的最大子数组和
        dp[0] = nums[0]
        max_sum = nums[0]  # 记录最大子数组和
        for i in range(1, n):
            dp[i] = max(nums[i], dp[i - 1] + nums[i])  # 状态转移方程
            max_sum = max(max_sum, dp[i])  # 更新最大子数组和
        return max_sum


solution = Solution()
print(solution.maxSubArray([5, 4, -1, 7, 8]))
