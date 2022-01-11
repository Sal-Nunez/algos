/*
Sum To One Digit
Implement a function sumToOne(num)​ that,
given a number, sums that number’s digits
repeatedly until the sum is only one digit. Return
that final one digit result.
Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

// const num1 = 5;
// const expected1 = 5;

// const num2 = 10;
// const expected2 = 1;

// const num3 = 25;
// const expected3 = 7;

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {
    if (num.length == 1) {
        return num;
    }
}
// console.log(sumToOneDigit(num1));

// ******************************************************

// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2129
/* 
String Anagrams
Given a string,
return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
Ok to use built in methods
*/

const str1 = "lim";
const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
var counter = 0;
const str11 = "limes";
const expected11 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];

function factorial(num) {
    let mult = 1;
    while (num > 0) {
        mult *= num;
        num--;
    }
    return mult;
}

function shuffle(str) {
    var arr = str.split("");
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        var rnd = Math.floor(Math.random() * len);
        var tmp = arr[i];
        arr[i] = arr[rnd];
        arr[rnd] = tmp;
    }

    console.log(counter++);
    return arr.join("");
}

function generateAnagrams(str, arr = []) {
    if (arr.length == factorial(str.length)) {
        return arr;
    }
    if (arr.length == 0) {
        arr.push(str);
    }
    str = shuffle(str);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == str) {
            return generateAnagrams(str, arr);
        }
    }
    arr.push(str);
    return generateAnagrams(str, arr);
}
console.log(generateAnagrams(str11));

// function sumToOneDigit(n) {
//     // Termination Condition if it's bad data (not a number)
//     if (isNaN(parseInt(n))) {
//         return null;
//     }

//     // base case: return solution
//     if (n < 10) {
//         return n;
//     }

//     const strNum = n.toString();
//     let sum = 0;

//     for (const strDigit of strNum) {
//         sum += parseInt(strDigit);
//     }

//     return sumToOneDigit(sum);
// }

// function generateAnagrams(str, solutions = [], partial = "") {
//     if (!str) {
//         if(!solutions.contains(partial)) solutions.push(partial);
//     }

//     for (let i = 0; i < str.length; i++) {
//         const leftSlice = str.slice(0, i);
//         const rightSlice = str.slice(i + 1); // skips current letter
//         generateAnagrams(leftSlice + rightSlice, solutions, partial + str[i]);
//     }
//     return solutions;
// }
