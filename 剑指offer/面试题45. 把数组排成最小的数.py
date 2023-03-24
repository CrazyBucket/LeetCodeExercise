from typing import List


class Solution:
    def minNumber(self, nums: List[int]) -> str:
        # 将整数数组转换为字符串数组
        arr = [str(num) for num in nums]
        # 按照规则排序字符串数组
        arr = sorted(arr, key=lambda x: x + arr[0] if x + arr[0] < arr[0] + x else arr[0] + x)
        # 拼接排好序的字符串数组
        return ''.join(arr)


# 核心思想，如果a+b<b+a，则a排在b前面


solution = Solution()
print(solution.minNumber([121, 12]))
# 执行用时：
# 52 ms
# , 在所有 Python3 提交中击败了
# 28.23%
# 的用户
# 内存消耗：
# 15 MB
# , 在所有 Python3 提交中击败了
# 70.00%
# 的用户
# 通过测试用例：
# 223 / 223

# 示例：
# class Solution:
#     def minNumber(self, nums: List[int]) -> str:
#         strs = [str(num) for num in nums]
#
#         def quick_sort(l, r):
#             if l >= r:
#                 return
#
#             i, j = l, r
#             while i < j:
#                 while strs[j] + strs[l] >= strs[l] + strs[j] and i < j:
#                     j -= 1
#                 while strs[i] + strs[l] <= strs[l] + strs[i] and i < j:
#                     i += 1
#                 strs[i], strs[j] = strs[j], strs[i]
#             strs[i], strs[l] = strs[l], strs[i]
#             quick_sort(l, i - 1)
#             quick_sort(i + 1, r)
#
#         quick_sort(0, len(strs) - 1)
#         return ''.join(strs)
