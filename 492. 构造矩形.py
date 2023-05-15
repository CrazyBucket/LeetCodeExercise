from typing import List
import math


class Solution:
    def constructRectangle(self, area: int) -> List[int]:
        n = math.sqrt(area)
        x = math.floor(n)
        if n.is_integer():
            return [x, x]
        for i in range(x, area):
            if (area / i).is_integer():
                if i > math.floor(area / i):
                    return [i, math.floor(area / i)]
        return [area, 1]


solution = Solution()
print(solution.constructRectangle(2))
