class Solution:
    def reverseLeftWords(self, s: str, n: int) -> str:
        a=s[0:n]
        b=s[n:len(s)]
        return b+a
solution = Solution()
print(solution.reverseLeftWords("abcdefg",2))