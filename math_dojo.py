class MathDojo:
    def __init__(self):
        self.result = 0
    def add(self, num, *nums):
        self.result += num
        for x in nums:
            self.result += x
        return self
        # your code here
    def subtract(self, num, *nums):
        self.result -= num
        for x in nums:
            self.result -= x
        return self
        # your code here
# create an instance:
md = MathDojo()
two = MathDojo()
# to test:
x = md.add(2).add(2,5,1).subtract(3,2).result
print(x)	# should print 5
y = two.add(1, 1).add(1, 2, 3, 4, 1, 1, 2, 3, 4, 5).subtract(1, 2, 3).result
print(y)
# run each of the methods a few more times and check the result!

