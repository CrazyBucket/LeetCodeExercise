from typing import List


class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        dic = dict(zip(heights, names))
        ans = sorted(dic.keys(), reverse=True)
        result = []
        for i in ans:
            result.append(dic[i])
        return result


solution = Solution()
print(solution.sortPeople(["Mary", "John", "Emma"], [180, 165, 170]))
