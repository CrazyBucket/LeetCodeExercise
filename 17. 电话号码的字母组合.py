from typing import List


class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        dic = {2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz'}
        res = []
        self.dfs(digits, dic, '', res)
        return res

    def dfs(self, digits, dic, path, res):
        if not digits:
            res.append(path)
            return
        for c in dic[int(digits[0])]:
            self.dfs(digits[1:], dic, path + c, res)


solution = Solution()
print(solution.letterCombinations('23'))
