// Given a string s, return true if the s can be palindrome after deleting at most one character from it.



// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false


// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let freq = {}
    for (let i = 0; i < s.length; i++) {
        freq[s[i]] ? freq[s[i]] += 1 : freq[s[i]] = 1
    }
    freq[odd] = 0
    freq[even] = 0
    for (const num in freq) {
        if (Object.hasOwnProperty.call(freqTable, num)) {
            freq[num] % 2 ? freq[even] += 1 : freq[odd] += 1
        }
    }
    return freq
}

console.log(validPalindrome("abca"))