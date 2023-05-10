class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        dic1 = {}
        dic2 = {}
        for ch in s:
            dic1[ch] = dic1.get(ch, 0) + 1
        for ch in t:
            dic2[ch] = dic2.get(ch, 0) + 1
        if dic1 == dic2:
            return True
        return False


solution = Solution()
print(solution.isAnagram("anagrm", 'nagaram'))
