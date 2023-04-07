from typing import List


class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        if not nums:
            return [[]]
        result = []
        for i in range(len(nums)):
            first = nums[i]
            rest = nums[:i] + nums[i + 1:]
            permutations = self.permute(rest)
            for permutation in permutations:
                result.append([first] + permutation)
        return result


solution = Solution()
print(solution.permute([1, 2, 3]))
