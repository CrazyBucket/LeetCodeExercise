from typing import List

class Solution:
    def mostFrequentEven(self, nums: List[int]) -> int:
        nums.sort()
        dic = {}
        for i in nums:
            if i in dic:
                dic[i] += 1
            else:
                dic[i] = 1
        ans = -1
        num = 0
        for i in dic:
            if i % 2 == 0:
                if dic[i] >= num:
                    ans = i
                    num = dic[i]
        return ans


solution = Solution()
print(solution.mostFrequentEven([8154, 9139, 8194, 3346, 5450, 9190, 133, 8239, 4606, 8671, 8412, 6290]))


# class Solution:
#     def mostFrequentEven(self, nums: List[int]) -> int:
#         freq_dict = {}
#         for num in nums:
#             if num % 2 == 0:
#                 freq_dict[num] = freq_dict.get(num, 0) + 1
#         most_frequent = None
#         for num, freq in freq_dict.items():
#             if most_frequent is None or (freq > freq_dict[most_frequent]) or (
#                     freq == freq_dict[most_frequent] and num < most_frequent):
#                 most_frequent = num
#         return most_frequent if most_frequent is not None else -1
