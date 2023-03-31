from typing import List


class Solution:
    def check(self, nums: List[int], diff: int, idx: int) -> bool:
        a = nums[idx] + diff
        b = nums[idx] + 2 * diff
        return a in nums[idx + 1:] and b in nums

    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        ans = 0
        for j in range(1, len(nums) - 1):
            for i in range(j):
                if nums[j] - nums[i] == diff and self.check(nums, diff, i):
                    ans += 1
        return ans


solution = Solution()
print(solution.arithmeticTriplets([4, 5, 6, 7, 8, 9],
                                  2))
