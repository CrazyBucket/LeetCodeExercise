import re


class Solution:
    def number(self, s: str) -> str:
        s = re.findall(r'\d+', s)
        s = ''.join(s)
        p = s[0: len(s) - 10]
        a = s[len(s) - 10: len(s)]
        if len(p) == 0:
            return "***-***-" + a[len(a) - 4:len(a)]
        return '+' + '*' * len(p) + "-***-***-" + a[len(a) - 4:len(a)]

    def email(self, s: str) -> str:
        p = s.split("@")[0].lower()
        a = s.split("@")[1].lower()
        # .split可以以"字符"分割成字符串数组
        # print(str.upper())   把所有字符中的小写字母转换成大写字母
        # print(str.lower())   把所有字符中的大写字母转换成小写字母
        # print(str.capitalize())   把第一个字母转化为大写字母，其余小写
        # print(str.title())   把每个单词的第一个字母转化为大写，其余小写
        return p[0] + '*****' + p[len(p) - 1] + "@" + a

    def maskPII(self, s: str) -> str:
        if "@"in s:
            return self.email(s)
        return self.number(s)


solution = Solution()
print(solution.maskPII("86-(10)12345678"))

# 执行结果：
# 通过
# 显示详情
# 查看示例代码
# 添加备注

# 执行用时：
# 28 ms
# , 在所有 Python3 提交中击败了
# 93.51%
# 的用户
# 内存消耗：
# 14.9 MB
# , 在所有 Python3 提交中击败了
# 66.23%
# 的用户
# 通过测试用例：
# 66 / 66