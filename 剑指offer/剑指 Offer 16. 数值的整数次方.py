# 开玩笑的，这么写没有任何意义
# class Solution:
#     def myPow(self, x: float, n: int) -> float:
#         if n > 0:
#             return x ** n
#         else:
#             return (1 / x) ** -n
class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n == 0:
            return 1
        if n == 1:
            return x
        if n < 0:
            n = -n
            x = 1 / x
        half = self.myPow(x, n // 2)
        if n % 2 == 0:
            return half * half
        else:
            return half * half * x


solution = Solution()
print(solution.myPow(0.44528, 0))
