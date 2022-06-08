// This time we want to write calculations using functions and get the results.

// Examples:
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...: eight(dividedBy(three()));

const zero = (operator = null) => operator ? operator(0) : 0
const one = (operator = null) => operator ? operator(1) : 1
const two = (operator = null) => operator ? operator(2) : 2
const three = (operator = null) => operator ? operator(3) : 3
const four = (operator = null) => operator ? operator(4) : 4
const five = (operator = null) => operator ? operator(5) : 5
const six = (operator = null) => operator ? operator(6) : 6
const seven = (operator = null) => operator ? operator(7) : 7
const eight = (operator = null) => operator ? operator(8) : 8
const nine = (operator = null) => operator ? operator(9) : 9

const times = (num) => x
const plus = (num) => x
const minus = (num) => x
const dividedBy = (num) => x