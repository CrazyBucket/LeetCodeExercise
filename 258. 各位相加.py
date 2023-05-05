class Solution:
    def addDigits(self, num: int) -> int:
        sum = 0
        if num >= 10:
            for i in str(num):
                sum = sum + int(i)
            return self.addDigits(sum)
        return num


solution = Solution()
print(solution.addDigits(38))
