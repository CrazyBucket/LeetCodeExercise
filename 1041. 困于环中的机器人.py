class Solution:
    def isRobotBounded(self, instructions: str) -> bool:
        route = [(0, 0)]
        # 北方是1
        # 东方是2
        # 南方是3
        # 西方是4
        direction = 1
        for i in instructions:
            if i == 'G':
                if direction == 1:
                    x, y = route[-1]
                    route.append((x, y + 1))
                if direction == 2:
                    x, y = route[-1]
                    route.append((x + 1, y))
                if direction == 3:
                    x, y = route[-1]
                    route.append((x, y - 1))
                if direction == 4:
                    x, y = route[-1]
                    route.append((x - 1, y))
            elif i == 'L':
                direction -= 1
            elif i == 'R':
                direction += 1
            if direction < 1:
                direction += 4
            if direction > 4:
                direction -= 4
        # 如果机器人回到原点或者移动路径形成了一个封闭环路，则返回 True，否则返回 False
        return route[-1] == (0, 0) or direction != 1


solution = Solution()
print(solution.isRobotBounded("GG"))
