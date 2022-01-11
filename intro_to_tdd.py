from typing import Union
import unittest
import math

# def reverseList(list):
#     pass
#     for x in range(int(len(list)/2)):
#         list[x], list[len(list) - 1 - x] = list[len(list) - 1 - x], list[x]
#     return list

# class ReverseListTests(unittest.TestCase):
#     def testOne(self):
#         self.assertEqual(reverseList([1, 3, 5]), [5, 3, 1])
#     def testTwo(self):
#         self.assertEqual(reverseList([1, 5, 6, 7, 8, 4]), [4, 8, 7, 6, 5, 1])
#     def testThree(self):
#         self.assertEqual(reverseList(['jack', 'john', 'jill', 'jenny']), ['jenny', 'jill', 'john', 'jack'])
#     def testFour(self):
#         self.assertEqual(reverseList([500, 30, 250, 1000, 2.5, 3]), [3, 2.5, 1000, 250, 30, 500])

# def isPalindrome(word):
#     # pass
#     wordBackwards = f'{word}'[::-1]
#     if (word == wordBackwards):
#         return True
#     else:
#         return False

# class isPalindromeTests(unittest.TestCase):
#     def testOne(self):
#         self.assertTrue(isPalindrome('racecar'))
#     def testTwo(self):
#         self.assertFalse(isPalindrome('Hello World'))
#     def testThree(self):
#         self.assertTrue(isPalindrome('rotator'))
#     def testFour(self):
#         self.assertTrue(isPalindrome('radar'))
#     def testFive(self):
#         self.assertFalse(isPalindrome('dojo'))
#     def testSix(self):
#         self.assertFalse(isPalindrome('ninja'))

# def correctChange(amount):
#     amountLeft = amount
#     changeArray = []
#     changeArray.append(math.floor(amountLeft / 25))
#     amountLeft -= math.floor(amountLeft / 25) * 25
#     changeArray.append(math.floor(amountLeft / 10))
#     amountLeft -= math.floor(amountLeft / 10) * 10
#     changeArray.append(math.floor(amountLeft / 5))
#     amountLeft -= math.floor(amountLeft / 5) *5
#     changeArray.append(amountLeft)
#     return changeArray

# class correctChangeTests(unittest.TestCase):
    # def testOne(self):
    #     self.assertEqual(correctChange(87), [3, 1, 0, 2])
#     def testTwo(self):
#         self.assertEqual(correctChange(95), [3, 2, 0, 0])
#     def testThree(self):
#         self.assertEqual(correctChange(26), [1, 0, 0, 1])
#     def testFour(self):
#         self.assertEqual(correctChange(75), [3, 0, 0, 0])
#     def testFive(self):
#         self.assertEqual(correctChange(49), [1, 2, 0, 4])
#     def testSix(self):
#         self.assertEqual(correctChange(38), [1, 1, 0, 3])

# def factorial(num):
#     # pass
#     factored = 1
#     for x in range(num, 0, -1):
#         factored *= x
#     return factored

# class factorialTests(unittest.TestCase):
#     def testOne(self):
#         self.assertEqual(factorial(5), 120)
#     def testTwo(self):
#         self.assertEqual(factorial(4), 24)
#     def testThree(self):
#         self.assertEqual(factorial(10), 3628800)
#     def testFour(self):
#         self.assertEqual(factorial(3), 6)

def fibonacci(num):
    fibonacciArr = [0, 1]
    for x in range(num):
        newFib = fibonacciArr[0+x] + fibonacciArr[1+x]
        fibonacciArr.append(newFib)
    return fibonacciArr[len(fibonacciArr)-2]


class fibonacciTests(unittest.TestCase):
    def testOne(self):
        self.assertEqual(fibonacci(5), 5)
    def testTwo(self):
        self.assertEqual(fibonacci(4), 3)
    def testThree(self):
        self.assertEqual(fibonacci(6), 8)
    def testFour(self):
        self.assertEqual(fibonacci(8), 21)

if __name__ == '__main__':
    unittest.main()