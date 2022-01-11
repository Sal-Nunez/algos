// 3. Longest Substring Without Repeating Characters
// Medium

// 19776

// 902

// Add to List

// Share
// Given a string s, find the length of the longest substring without repeating characters.



//     Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


//     Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.
//      Accepted:
//      2, 793, 660
//      Submissions:
//      8, 573, 339


/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let longest = []
    let current = []
    let i = 0
    let j = 0
    while(i <= s.length - longest.length && j < s.length) {
        if (!current.includes(s[j])) {
            current.push(s[j])
            j++
            if (j == s.length && current.length > longest.length) longest = current
        } else {
            if (current.length > longest.length) {
                longest = current
            }
            i++
            j = i
            current = []
        }
    }
    return longest.length
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(" "));