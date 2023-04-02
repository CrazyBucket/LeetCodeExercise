class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        dic = {}
        if len(nums) < 3:
            return nums[0]
        for i in nums:
            if i in dic:
                dic[i] += 1
                if dic[i] > len(nums) / 2:
                    return i
            else:
                dic[i] = 1
