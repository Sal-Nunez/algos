// 1249. Minimum Remove to Make Valid Parentheses
// Given a string s of '(' , ')' and lowercase English characters.

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.


// Example 1:

// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

// Example 2:
// Input: s = "a)b(c)d"
// Output: "ab(c)d"

// Example 3:
// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.

// Example 4:
// Input: s = "(a(b(c)d)"
// Output: "a(b(c)d)"


// Constraints:
// 1 <= s.length <= 105
// s[i] is either'(' , ')', or lowercase English letter.


/**
 * @param {string} s
 * @return {string}
 */
const minRemoveToMakeValid = function (s) {
    let string = s
    let stack2 = []
    let tempString = ""
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ")" && stack2.length !== 0) {
            stack2.pop()
            tempString += string[i]
        }
        if (string[i] === "(") {
            stack2.push("(")
        }
        if (string[i] !== ")") tempString += string[i]
    }
    string = tempString
    tempString = ""
    stack2 = []
    for (let i = string.length - 1; i >= 0;i--) {
        if (string[i] === "(" && stack2.length !== 0) {
            stack2.pop()
            tempString += string[i]
        }
        if (string[i] === ")") {
            stack2.push(")")
        }
        if (string[i] !== "(") tempString += string[i]
    }
    return tempString.split('').reverse().join('')
}

// const minRemoveToMakeValid = function (s) {
//     let string = ""
//     // if (!/[a-z]/.test(s)) return string
//     let parens = {"(" : 0, ")": 0}
//     const open = "("
//     const close = ")"
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === open) parens["("] += 1
//         if (s[i] === close) parens[")"] += 1
//     }
//     // if (parens["("] === parens[")"]) return s
    
//     let count = 0
//     let stack = []
//     let num = parens["("] > parens[")"] ? parens["("] - parens[")"] : parens[")"] - parens["("]
//     if (parens["("] > parens[")"]) {
//         for (let i = s.length - 1; i >= 0; i--) {
//             if (s[i] === ")") stack.push("(")
//             if (s[i] === "(") stack.pop()
//             if (stack.length === 0 && s[i] === "(" && count !== num) {
//                 count++
//             } else string += s[i]
//         }
//         string = string.split('').reverse().join('')
//     } else {
//         for (let i = 0; i < s.length; i++) {
//             if (s[i] === "(") stack.push("(")
//             if (s[i] === ")") stack.pop()
//             if (stack.length === 0 && s[i] === ")" && count !== num) {
//                 count++
//             } else string += s[i]
//         }
//     }
//     let stack2 = []
//     let tempString = ""
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === ")" && stack2.length !== 0) {
//             stack2.pop()
//             tempString += string[i]
//         }
//         if (string[i] === "(") {
//             stack2.push("(")
//         }
//         if (string[i] !== ")") tempString += string[i]
//     }
//     string = tempString
//     tempString = ""
//     stack2 = []
//     for (let i = string.length - 1; i >= 0;i--) {
//         if (string[i] === "(" && stack2.length !== 0) {
//             stack2.pop()
//             tempString += string[i]
//         }
//         if (string[i] === ")") {
//             stack2.push(")")
//         }
//         if (string[i] !== "(") tempString += string[i]
//     }
//     return tempString.split('').reverse().join('')
// }


const str1 = "lee(t(c)o)de)"
const str2 = "a)b(c)d"
const str3 = "))(("
const str4 = "(a(b(c)d)"
const str5 = "lee(t(c)o)de"
const str6 = "ab(c)d("

const answer1 = minRemoveToMakeValid(str1)
const answer2 = minRemoveToMakeValid(str2)
const answer3 = minRemoveToMakeValid(str3)
const answer4 = minRemoveToMakeValid(str4)
const answer5 = minRemoveToMakeValid(str5)
const answer6 = minRemoveToMakeValid(str6)

console.log(answer1, ["lee(t(co)de)", "lee(t(c)ode)"].includes(answer1))
console.log(answer2, answer2 === "ab(c)d")
console.log(answer3, answer3 === "")
console.log(answer4, ["a(b(c)d)", "(ab(c)d)"].includes(answer4))
console.log(answer5, answer5 === "lee(t(c)o)de")
console.log(answer6, answer6 === "ab(c)d")