// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

// Our Solution
function solve(s) {
    const alphabet = { a: 0, b: 2, c: 3, d: 4, e: 0, f: 6, g: 7, h: 8, i: 0, j: 10, k: 11, l: 12, m: 13, n: 14, o: 0, p: 16, q: 17, r: 18, s: 19, t: 20, u: 0, v: 22, w: 23, x: 24, y: 25, z: 26 }
    let big = temp = 0;
    for (let letter of s) alphabet[letter] > 0 ? temp += alphabet[letter] : temp > big ? (big = temp, temp = 0) : temp = 0
    temp > big ? big = temp : null
    return big;
};

// Solution 1
const solve = s => s.split(/[aeiou]+/).reduce((s, n) => Math.max(s, n.split('').reduce((a, b) => a + b.charCodeAt(0) - 96, 0)), 0);

//Solution 2
function solve(s) {
    let highest = 0
    let sum = 0
    for (const char of s) {
        if (isConsonant(char)) {
            sum += getValue(char)
            if (highest < sum) {
                highest = sum
            }
        } else {
            sum = 0
        }
    }
    return highest
};

function getValue(char) {
    return char.charCodeAt(0) - 97 + 1
}

function isConsonant(char) {
    return !'aeiou'.includes(char)
}

//Solution 3
function solve(s) {
    return Math.max(...s.match(/[^aeiou]+/g).map(x => [...x].reduce((s, v) => s + v.charCodeAt() - 96, 0)))
}

// Solution 4
const value = t => t ? t.charCodeAt(0) + value(t.slice(1)) - 96 : 0;
const solve = s => s.split(/[aeiou]+/).reduce((v, t) => Math.max(v, value(t)), 0);