class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        dic = {}
        for i in s:
            if i not in dic:
                dic[i] = 1
            else:
                dic[i] += 1
        for i in t:
            if i not in dic or dic[i] == 0:
                return i
            else:
                dic[i] -= 1


solution = Solution()
print(solution.findTheDifference('a', 'aa'))
