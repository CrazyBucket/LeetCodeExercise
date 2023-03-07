# 4. 寻找两个正序数组的中位数
class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        i, j = 0, 0
        nums3 = []
        while i < len(nums1) and j < len(nums2):
            if nums1[i] >= nums2[j]:
                nums3.append(nums2[j])
                j += 1
            else:
                nums3.append(nums1[i])
                i += 1

        if i == len(nums1) and j != len(nums2):
            while j < len(nums2):
                nums3.append(nums2[j])
                j += 1
        elif i != len(nums1):
            while i < len(nums1):
                nums3.append(nums1[i])
                i += 1
        if len(nums3) % 2 == 0:
            return (nums3[len(nums3) >> 1] + nums3[(len(nums3) >> 1) - 1]) / 2
        return nums3[len(nums3) >> 1]


solution = Solution()
nums1 = [1, 3]
nums2 = [2]
result = solution.findMedianSortedArrays(nums1, nums2)
print(result)
