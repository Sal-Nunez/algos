/* 
  recursively find the lowest common multiple between two numbers
  "A common multiple is a number that is a multiple of two or more integers. 
  The common multiples of 3 and 4 are 0, 12, 24, .... 
  The least common multiple (LCM) of two numbers is the smallest number (not zero) 
  that is a multiple of both."
  
  Try writing two columns of multiples as a starting point:
  starting with 15 and 25 and keep writing their multiples until you find the lowest common one
  then turn this in to a step by step instruction
  15 25
  30 50
  45 75
  60
  75
  75 is the first common
*/

const num1A = 1;
const num1B = 1;
const expected1 = 1;

const num2A = 5;
const num2B = 10;
const expected2 = 10;

const num3A = 10;
const num3B = 5;
const expected3 = 10;

const num4A = 6;
const num4B = 8;
const expected4 = 24;

const num5A = 15;
const num5B = 25;
const expected5 = 75;

/**
 * Add params if needed for recursion
 * Finds the lowest common multiple of the two given ints.
 * @param {number} a
 * @param {number} b
 * @returns {number} The lowest common multiple of the given ints.
 * 8*3=24
 * 6*4=24
 */
function lowestCommonMult(a, b, x = 1, y = 1, totalA = a, totalB = b) {
    if (totalA == totalB) {
        return totalA
    }
    totalA = a * x
    totalB = a * y
    if (totalA > totalB) {
        y++
    }
    else {
        x++
    }
    return lowestCommonMult(a, b, x, totalA, totalB)
}
console.log(lowestCommonMult(num2A, num2B));
console.log(6 % 1);
// *********************************************************************


/* 
  Binary String Expansion
  You are given a STRING containing chars "0", "1", and "?"
  For every "?" character, either "0" or "1" can be substituted.
  Write a recursive function to return array of all valid strings with "?" chars expanded to "0" or "1". 
*/

const str1 = "1?0?";
const expected1 = ["1000", "1001", "1100", "1101"];

const str2 = "1?0?0101?010??";
const expected2 = "?";
// output list order does not matter

/**
 * Add params if needed for recursion
 * Expands a string such that each "?" in the given string will be replaced
 * with a "0" and a "1".
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string containing to expand.
 * @returns {Array<string>} The expanded versions of the given string.
 */
// function binaryStringExpansion(str, index = 0, index2 = 0, newStr = []) {

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == '?') {
//             index2 = i
//         }
//     }
// }

// function print(str, index = 0) {
//     if (index === str.length) {
//         document.write(str.join("") + "<br>");
//         return;
//     }

//     if (str[index] === "?") {
//         // replace '?' by
//         // '0' and recurse
//         str[index] = "0";
//         print(str, index + 1);

//         // replace '?' by
//         // '1' and recurse
//         str[index] = "1";
//         print(str, index + 1);

//         // NOTE: Need to backtrack
//         // as string is passed by
//         // reference to the function
//         str[index] = "?";
//     } else print(str, index + 1);
// }

// // Driver Code

// var input = "1??0?101";
// var str = input.split("");
// print(str);


function patterns(str, all) {

    // if the string is empty, return all the string sets
    if (str.length === 0) { return all; }
    // if character is 0 or 1 then add the character to each
    // string set we currently have so far
    if (str[0] === '0' || str[0] === '1') {
        for (var i = 0; i < all.length; i++) {
            all[i].push(str[0]);
        }
    }
    // for a wildcard, we make a copy of each string set
    // and for half of them we append a 0 to the string 
    // and for the other half we append a 1 to the string
    if (str[0] === '?') {
        var len = all.length;
        for (var i = 0; i < len; i++) {
            var temp = all[i].slice(0);
            all.push(temp);
        }
        for (var i = 0; i < all.length; i++) {
            (i < all.length / 2) ? all[i].push('0') : all[i].push('1');
        }
    }
    // recursively calculate all string sets
    return patterns(str.substring(1), all);
}

console.log(patterns(str1, [[]]));

/* 
  recursively find the lowest common multiple between two numbers
  "A common multiple is a number that is a multiple of two or more integers. 
  The common multiples of 3 and 4 are 0, 12, 24, .... 
  The least common multiple (LCM) of two numbers is the smallest number (not zero) 
  that is a multiple of both."
  
  Try writing two columns of multiples as a starting point:
  starting with 15 and 25 and keep writing their multiples until you find the lowest common one
  then turn this in to a step by step instruction
  15 25
  30 50
  45 75
  60
  75
  75 is the first common
*/

const num1A = 1;
const num1B = 1;
const expected1 = 1;

const num2A = 5;
const num2B = 10;
const expected2 = 10;

const num3A = 10;
const num3B = 5;
const expected3 = 10;

const num4A = 6;
const num4B = 8;
const expected4 = 24;

const num5A = 15;
const num5B = 25;
const expected5 = 75;

/**
 * Add params if needed for recursion
 * Finds the lowest common multiple of the two given ints.
 * @param {number} a
 * @param {number} b
 * @returns {number} The lowest common multiple of the given ints.
 */
function lowestCommonMult(a, b, am=a, bm=b) {
    if (am === bm){
        return am
    }
    if (am < bm){
        return lowestCommonMult(a,b, am + a, bm)
    }
    if (bm < am){
        return lowestCommonMult(a,b, am, bm + b)
    }
}
console.log(lowestCommonMult(num4A, num4B));
console.log(lowestCommonMult(num5A, num5B));

/* 
  Binary String Expansion
  You are given a STRING containing chars "0", "1", and "?"
  For every "?" character, either "0" or "1" can be substituted.
  Write a recursive function to return array of all valid strings with "?" chars expanded to "0" or "1". 
*/

const str1 = "1?0?";
const expected1 = ["1000", "1001", "1100", "1101"];

const str2 = "1?0?0101?010??";
const expected2 = "?";
// output list order does not matter

/**
 * Add params if needed for recursion
 * Expands a string such that each "?" in the given string will be replaced
 * with a "0" and a "1".
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string containing to expand.
 * @returns {Array<string>} The expanded versions of the given string.
 */
function binaryStringExpansion(str, solutions=[], partial="") {
    const index = str.indexOf('?')

    if (index < 0){
        solutions.push(partial + str)
        console.log(`solutions ${solutions}`);
    } else {
        const front = str.slice(0, index)
        const back = str.slice(index + 1)
        const prefix = partial + front
        console.log(`front: ${front}, back ${back} prefix ${prefix}`);
        binaryStringExpansion(back, solutions, prefix + "0")
        binaryStringExpansion(back, solutions, prefix + "1")
    }
    return solutions
}

console.log(binaryStringExpansion(str2));