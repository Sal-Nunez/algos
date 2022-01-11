/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function (s) {
    let count = 0
    let i = 0
    let j = s.length - 1
    let s1
    let s2
    while (count === 0 && i <= j) {
        if (s[i] === s[j]) {
            i++
            j--
            continue
        } else {
            count++
            s1 = s.split('')
            s1.splice(i, 1)
            s1 = s1.join('')
            s2 = s.split('')
            s2.splice(j, 1)
            s2 = s2.join('')
        }
    }
    if (count === 0) return true
    // let boolean1 = isValid(s1)
    // let boolean2 = isValid(s2)
    // if (boolean1 || boolean2) return true
    // else return false
    let boolean1 = s1 === s1.split("").reverse().join("")
    let boolean2 = s2 === s2.split("").reverse().join("")
    return boolean1 || boolean2
}

const isValid = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[str.length-1-i]) continue
        else return false
    }
    return true
}

console.log(validPalindrome("acxcybycxcxa"))
console.log(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"))
console.log(validPalindrome("abca"))
console.log(validPalindrome("abc"))
console.log(validPalindrome("aba"))