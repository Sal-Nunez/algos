// if f'{str[i]}' not in value

/* 
Given a string,
return a new string with the duplicates excluded
Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "helololo";
const expected3 = "helo";

// Bonus
const str4 = "helololol";
const expected4 = "heol";

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 * 1. create a loop
 * 2. check if letter is in newString
 * 3. add the letters into a new string if it isn't
 * 4. return it
 */

// function includes(str) {
//     for (let i = 0; i < str.length; i++){
//         if (str[i] == 'e')
//         return false;
//     }
//     return true;
// }
// console.log(includes(str3));

function stringDedupe(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++){
        if (! newStr.includes(str[i])){
            newStr += str[i]
        }
    }
    return newStr
}
console.log(stringDedupe(str2));

// ****************************************************************************************

/* 
Given a string containing space separated words
Reverse each word in the string.
If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 * 1. go through for loop
 * 2. check for spaces\
 * 3. after each space reverse the word in a new string and push in another new string
 * 4. return
 */
function reverseWords(str) {
    reverseStr = ""
    newStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str.length - 1 == i){
            reverseStr += str[i]
            for (let i = reverseStr.length-1; i >= 0; i--) {
                newStr += reverseStr[i]
            }
        }
        if (str[i] == ' '){
            for (let i = reverseStr.length-1; i >= 0; i--) {
                newStr += reverseStr[i]
            }
            newStr += " "
            reverseStr = ""
        }
        else {
            reverseStr += str[i]
            }
    }
    return newStr
}

console.log(reverseWords(str3));