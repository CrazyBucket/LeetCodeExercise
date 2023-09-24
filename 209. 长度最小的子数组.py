from typing import List


class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        n = len(nums)
        left, right = 0, 0
        window_sum = 0  # 窗口内元素的和
        min_len = float('inf')

        while right < n:
            window_sum += nums[right]
            while window_sum >= target:  # 当窗口内元素的和大于等于目标值时，缩小窗口，更新最小长度
                min_len = min(min_len, right - left + 1)
                window_sum -= nums[left]
                left += 1
            right += 1

        if min_len == float('inf'):
            return 0
        else:
            return min_len


s = 7
nums = [1, 5, 1, 2, 3, 3, 4]
solution = Solution()
print(solution.minSubArrayLen(s, nums))
