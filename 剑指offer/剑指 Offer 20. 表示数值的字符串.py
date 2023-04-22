class Solution:
    def isNumber(self, s: str) -> bool:
        s = s.strip()
        if len(s) == 0:
            return False
        n = 0
        has_digit = False
        for i, j in enumerate(s):
            if not j.isnumeric():
                if j != '+' and j != '-' and j != '.' and j != 'e' and j != 'E':
                    return False
                if j == 'e' or j == 'E':
                    if i == 0 or i == len(s) - 1 or not has_digit:
                        return False
                    if s[i + 1] == '+' or s[i + 1] == '-':
                        if s[i + 2:len(s)].isnumeric():
                            return True
                        return False
                    if s[i + 1:len(s)].isnumeric():
                        return True
                    else:
                        return False
                elif j == '.':
                    if len(s) == 1:
                        return False
                    n += 1
                    if n > 1:
                        return False
                elif j == "+" or j == '-':
                    if i != 0:
                        return False
            else:
                has_digit = True
        return has_digit


solution = Solution()
print(solution.isNumber("-1E-16"))
