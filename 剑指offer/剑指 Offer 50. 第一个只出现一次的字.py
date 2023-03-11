class Solution:
    def firstUniqChar(self, s: str) -> str:
        dict = {}
        for i in s:
            if i in dict:
                dict[i] += 1
            else:
                dict[i]=1
        for i in s:
            if dict[i] == 1:
                return i
        return ' '
solution = Solution()
print(solution.firstUniqChar("wweqeeqedfsfsfqrradadadeadm"))