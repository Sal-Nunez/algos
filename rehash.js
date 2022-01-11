/* 
Given to alumni by Riot games in 2021.
*/


/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */


const str1 = "b70a164c32a20c10"
const expected1 = "a184b70c42"

const rehash = s => {
    let freq = {}
    let num = letter = ""
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i]) || i === s.length - 1) {
            if (i === s.length - 1) num += s[i]
            if (letter !== "") freq[letter] ? freq[letter] += parseInt(num) : freq[letter] = parseInt(num)
            num = ""
            letter = s[i]
        } else num += s[i]
    }
    let expected = ""
    Object.keys(freq).sort().forEach(key => expected += key + freq[key])
    return expected
}

console.log(rehash(str1))