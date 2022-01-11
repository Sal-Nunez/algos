class Underscore:
    def map(self, iterable, callback):
        new_iterable = []
        for value in iterable:
            new_iterable.append(callback(value))
        return new_iterable
    def find(self, iterable, callback):
        num = 0
        for value in iterable:
            if callback(value):
                num = value
                break
        return num
    def filter(self, iterable, callback):
        new_iterable = []
        for value in iterable:
            if (callback(value)):
                new_iterable.append(value)
        return new_iterable
    def reject(self, iterable, callback):
        new_iterable = []
        for value in iterable:
            if not (callback(value)):
                new_iterable.append(value)
        return new_iterable
# you just created a library with 4 methods!
# let's create an instance of our class
_ = Underscore() # yes we are setting our instance to a variable that is an underscore
evens = _.filter([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0)
# should return [2, 4, 6] after you finish implementing the code above

map1 = _.map([1,2,3], lambda x: x*2) # should return [2,4,6]
find1 = _.find([1,2,3,4,5,6], lambda x: x>4) # should return the first value that is greater than 4
filter1 = _.filter([1,2,3,4,5,6], lambda x: x%2==0) # should return [2,4,6]
reject1 = _.reject([1,2,3,4,5,6], lambda x: x%2==0) # should return [1,3,5]

print(map1)
print(find1)
print(filter1)
print(reject1)