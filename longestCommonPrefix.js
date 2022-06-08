// 14. Longest Common Prefix
// Easy

// 6377

// 2690

// Add to List

// Share
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



//     Example 1:

// Input: strs = ["flower", "flow", "flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


//     Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower -case English letters.
//     Accepted
// 1, 344, 248
// Submissions
// 3, 494, 994

/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function (strs) {
//     if (strs.length === 1) return strs[0];
//     if (strs[0].length < 1) return ""
//     let prefix = ""
//     for (let i = 0; i < strs[0].length; i++) {
//         prefix += strs[0][i]
//         for (let j = 0; j < strs.length; j++) {
//             if (!strs[j].includes(prefix)) {
//                 return prefix.slice(0, prefix.length - 1)
//             }
//         }
//     }
//     return prefix
// };

const longestCommonPrefix = (strs) => {
    if (strs[0].length < 1) return ""
    for (let i = 0; i < strs[0].length; i++) {
        for (let s of strs) if(s[i] !== strs[0][i]) return s.slice(0, i)
    }
    return strs[0]
}

console.log(longestCommonPrefix(["", "", ""]))
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]))
console.log(longestCommonPrefix(["dog", "dacecar", "dar"]))
console.log(longestCommonPrefix(["c", "acc", "ccc"]))