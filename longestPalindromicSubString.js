// 5. Longest Palindromic Substring
// Medium

// 14912

// 879

// Add to List

// Share
// Given a string s, return the longest palindromic substring in s.



//     Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
//     Example 2:

// Input: s = "cbbd"
// Output: "bb"


// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.
//     Accepted
// 1, 606, 251
// Submissions
// 5, 088, 823


/**
 * @param {string} s
 * @return {string}
 */
// const longestPalindrome = function (s) {
//     let length = s.length
//     let i = 0
//     let j = 0
//     // console.log(s, s.split('').splice(1, length-1))
//     // console.log(isPalindrome(s.split('').splice(1, length-2)))
//     while(true) {
//         if (isPalindrome(s.split('').splice(i, length - j))) return s.split('').splice(i, length - j).join('')
//         if (i === j) {
//             i = 0
//             j++
//         } else i++
//     }
// }

const longestPalindrome = function(s) {
    if (s.length <= 1) return s
    let len = s.length
    let left = 0
    let width = 0
    let i = 0
    while (i < len) {
        // get repeated strings: e.g., aaaa in yaaaayz (k = 3)
        let k = 0
        while (k < len - i  && s[i] === s[i + k + 1]) {
            k++
            if (k >= width) {
                width = k + 1
                left = i
            }
        }

        // now get outward symmetries incorporating repeats to determine width of test
        let j = 0
        while (j < len - k - i && s[i - j - 1] === s[i + k + j + 1]) {
            j++
            span = 2*j + k + 1
            if (span > width) {
                width = span
                left = i - j
            }
        }

        // increment accounting for repeated characters
        i += k + 1
    }
    // if no width found just return the first character
    return (width === 0) ? s[0] : s.substring(left, left + width)
}



function isPalindrome(str) {
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}

console.log(longestPalindrome("dqlvtrcystnncxjffjrkiiqgtcunbwntqrpqkjepzbxzodeckrbrwzjjuptloypmjgbwioqtjzjjgqpaemgvxkapjgbfhhwltvtqgkozuzvlwetftjeocjqrdwlhdwtgzdhwvmuhvmdpkxnzrrizjntxbbpzwtjryecgfajolalwdzxqtknvvvaxuhanzowlbwjraigvrflcqoormbeexekmqpmuuobseumctsiwhvdohywjaylixqgqookgneokebtmoyaspnzbwqzffyocvcylcjobnzbmhsdprzrgdlyzuutyuwygzeldfewicjnukguisceeopckkoviayrcqanzsryhwqhxjxcpiejojztrxad"))