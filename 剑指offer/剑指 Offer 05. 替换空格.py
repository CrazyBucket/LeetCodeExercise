class Solution:
    def replaceSpace(self, s: str) -> str:
        return s.replace(' ','%20')

solution = Solution()
print(solution.replaceSpace("We are happy."))