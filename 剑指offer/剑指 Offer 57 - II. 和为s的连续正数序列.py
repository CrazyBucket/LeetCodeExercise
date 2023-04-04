from typing import List


class Solution:
    def findContinuousSequence(self, target: int) -> List[List[int]]:
        result = []
        window_sum, left = 0, 1
        for right in range(1, target):
            window_sum += right
            while window_sum > target:
                window_sum -= left
                left += 1
            if window_sum == target:
                result.append(list(range(left, right + 1)))
        return result


solution = Solution()
print(solution.findContinuousSequence(15))
