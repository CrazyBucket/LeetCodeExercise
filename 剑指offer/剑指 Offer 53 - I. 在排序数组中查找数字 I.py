from typing import List

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        count =0
        for i in range(len(nums)):
            if nums[i]== target:
                count+=1
        return count

        
solution = Solution()
print(solution.search([5,7,7,8,8,10],8))