/* 
An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.
Is there a quick way to determine if they aren't an anagram before spending more time?
Given two strings
return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;


const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

const strA5 = "yes1";
const strB5 = "e1ys";
const expected5 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 * 
 */
function isAnagram(s1, s2) {
    
}


// ******************************************************************

/* 
    String: Rotate String
    Create a standalone function that accepts a string and an integer,
    and rotates the characters in the string to the right by that given
    integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected11 = "Hello World";

const rotateAmnt2 = 1;
const expected12 = "dHello Worl";

const rotateAmnt3 = 2;
const expected13 = "ldHello Wor";

const rotateAmnt14 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected15 = "ldHello Wor";
/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

/**
 * Rotates a given string's characters to the right by the given amount,
 * wrapping characters to the beginning.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @param {number} amnt The amount of characters in the given str to rotate to the
 *    right.
 * @returns {string} The string rotated by the given amount.
 */
function rotateStr(str, amnt) {
    const rotateAmnt = amnt % str.length
    return (str.slice(str.length - rotateAmnt) + str.slice(0, str.length - rotateAmnt))
}