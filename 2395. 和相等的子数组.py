# from typing import List
#
#
# class Solution:
#     def __init__(self):
#         self.dic = {}
#
#     def findSubarrays(self, nums: List[int]) -> bool:
#         for i in range(len(nums)):
#             if i + 2 <= len(nums):
#                 cur_sum = sum(nums[i:i + 2])
#                 for idx, pre_sum in self.dic.items():
#                     if pre_sum == cur_sum and idx != i:
#                         return True
#                 self.dic[i] = cur_sum
#         return False
#
#
# solution = Solution()
# print(solution.findSubarrays([0, 1, 2, 3]))
# 执行用时：
# 64 ms
# , 在所有 Python3 提交中击败了
# 7.14%
# 的用户
# 内存消耗：
# 15 MB
# , 在所有 Python3 提交中击败了
# 54.76%
# 的用户
# 通过测试用例：
# 42 / 42


# Python 中，set() 是一种内置的数据类型和函数。
# 它是一个无序的、可变的集合，用于存储唯一的元素（即不允许重复）。
# 使用 set() 函数可以将一个序列（例如列表、元组或字符串）转换为一个集合。
# 具体来说，如果给定一个序列 seq，则可以使用 set(seq) 来创建一个包含序列中所有不同元素的集合。
from typing import List


class Solution:
    def __init__(self):
        self.sums = set()

    def findSubarrays(self, nums: List[int]) -> bool:
        for i in range(len(nums)):
            if i + 2 <= len(nums):
                cur_sum = sum(nums[i:i + 2])
                if cur_sum in self.sums:
                    return True
                self.sums.add(cur_sum)
        return False


solution = Solution()
print(solution.findSubarrays([0, 1, 2, 1]))
# 执行用时：
# 24 ms
# , 在所有 Python3 提交中击败了
# 99.40%
# 的用户
# 内存消耗：
# 15.2 MB
# , 在所有 Python3 提交中击败了
# 5.36%
# 的用户
# 通过测试用例：
# 42 / 42
