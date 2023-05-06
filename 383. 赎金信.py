class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        dic = {}
        for i in magazine:
            if i not in dic:
                dic[i] = 1
            else:
                dic[i] += 1
        for i in ransomNote:
            if i in dic:
                if dic[i] != 0:
                    dic[i] -= 1
                else:
                    return False
            else:
                return False
        return True


solution = Solution()
print(solution.canConstruct('aa', 'ab'))
