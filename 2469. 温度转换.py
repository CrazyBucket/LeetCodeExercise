from typing import List


class Solution:
    def convertTemperature(self, celsius: float) -> List[float]:
        return [celsius + 273.15, celsius * 1.80 + 32.00]


solution = Solution()
print(solution.convertTemperature(36.50))
