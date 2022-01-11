/* 
String: Is Palindrome
Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards

Do not ignore spaces, punctuation and capitalization
 */

// const str1 = "a x a";
// const expected1 = true;

// const str2 = "racecar";
// const expected2 = true;

// const str3 = "Dud";
// const expected3 = false;

// const str4 = "oho!";
// const expected4 = false;

/**
   * Determines if the given str is a palindrome (same forwards and backwards).
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str
   * @returns {boolean} Whether the given str is a palindrome or not.
   */
function isPalindrome(str) {
    for (var i = 0; i<str.length/2; i++){
        if (str[i] != str[str.length-1-i]){
            return false
        }
    }
    return true
}
// console.log(isPalindrome(str2));
/* 
Longest Palindrome
For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 
Strings longer or shorter than complete words are OK.
All the substrings of "abc" are:
a, ab, abc, b, bc, c
*/

const str6 = "abc"

const str1 = "what up, daddy-o?";
const expected11 = "dad";

const str2 = "uh, not much";
const expected12 = "u";

const str3 = "Yikes! my favorite racecar erupted!";
const expected13 = "e racecar e";

const str4 = "a1001x20002y5677765z";
const expected14 = "5677765";

const str5 = "a1001x20002y567765z";
const expected15 = "567765";

/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */
function longestPalindromicSubstring(str) {
    let checkIfPalindrome = []
    let str1 = ""
    let str2 = ""
    for (let i = 0; i<str.length; i++) {
        checkIfPalindrome.push(str[i])
        str1 += str[i] + str[i+1]
        checkIfPalindrome.push(str1)
        str2 += str[i-1] + str[i] +str[i+1]
        checkIfPalindrome.push(str2)
        str2 = ""
    }
    console.log(checkIfPalindrome);
}
console.log(longestPalindromicSubstring(str5));

// is Palindrome Number
// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// Example 1:
const num1 = 121
const expected21 = true


// Example 2:
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
const num2 = -121
const expected22 = false

// Example 3:
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
const num3 = 10
const expected23 = false

// Example 4:
const num4 = -101
const expected24 = false


// function isNumPalindrome(num) {
//     num = num.toString()
//     for (var i = 0; i < num.length/2; i++) if (num[i] != num[num.length-1-i]) return false
//     return true
// }

// console.log(isNumPalindrome(num1));
// console.log(isNumPalindrome(num2));
// console.log(isNumPalindrome(num3));
// console.log(isNumPalindrome(num4));