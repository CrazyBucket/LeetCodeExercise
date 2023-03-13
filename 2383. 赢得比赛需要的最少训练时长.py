from typing import List


class Solution:
    def minNumberOfHours(self, initialEnergy: int, initialExperience: int, energy: List[int],
                         experience: List[int]) -> int:
        e = sum(energy)
        t = 0
        if initialEnergy <= e:
            
            t = e - initialEnergy + 1
        for i in range(len(experience)):
            print("p",initialExperience)
            if initialExperience <= experience[i]:
                t = t + (experience[i] - initialExperience + 1)
                initialExperience = initialExperience +(experience[i] - initialExperience + 1)
            initialExperience = initialExperience + experience[i]
        return t


solution = Solution()
# print(solution.minNumberOfHours(1,
#                                 1,
#                                 [1, 1, 1, 1],
#                                 [1, 1, 1, 50]))
print(solution.minNumberOfHours(5,
                                3,
                                [1,4,3,2],
                                [2,6,3,1]))
