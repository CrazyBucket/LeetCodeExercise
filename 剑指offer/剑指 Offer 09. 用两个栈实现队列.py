class CQueue:
    def __init__(self):
        self.stackA = []
        self.stackB = []

    def appendTail(self, value: int) -> None:
        self.stackA.append(value)

    def deleteHead(self) -> int:
        if not self.stackB and not self.stackA:
            return -1
        if not self.stackB:
            while self.stackA:
                self.stackB.append((self.stackA.pop()))
        return self.stackB.pop()

# Your CQueue object will be instantiated and called as such:
# obj = CQueue()
# obj.appendTail(value)
# param_2 = obj.deleteHead()
