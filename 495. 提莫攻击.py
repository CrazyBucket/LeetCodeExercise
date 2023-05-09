from typing import List


class Solution:
    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
        t = 0
        for i, j in enumerate(timeSeries):
            if i < len(timeSeries) - 1:
                if timeSeries[i + 1] - j > duration:
                    t += duration
                else:
                    t = timeSeries[i + 1] - j + t
        return t + duration


solution = Solution()
print(solution.findPoisonedDuration([1, 2], 2))
