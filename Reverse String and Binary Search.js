/* 
Recursively reverse a string
helpful methods:
str.slice(beginIndex[, endIndex])
returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

const str3 = 42;
const expected3 = "The answer to the universe";

const str4 = '2124a5135413413';
const expected4 = false;

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */
function reverseStr(str, index=0) {
    console.log(str[index], index);
    if (str === 42){
        return "The answer to the universe";
    }
    else if (parseInt(str)){
        return false;
    }
    if (index == str.length - 1) {
        return str[index];
    }
    return reverseStr(str, index+1) + str[index]
}
console.log(reverseStr(str1));



// ***********************************************

/*
Recursive Binary Search
Input: SORTED array of ints, int value
Output: bool representing if value is found
Recursively search to find if the value exists, do not loop over every element.
Approach:
Take the middle item and compare it to the given value.
Based on that comparison, narrow your search to a particular section of the array
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */
function binarySearch(sortedNums, searchNum, left=0, right = sortedNums.length - 1, middle = 0) {
    if (left <= right) {
        middle = Math.floor((right-left) / 2)
    }
    if (left >= right) {
        return false
    }
    if (sortedNums[middle] === searchNum){
        return true
    }
    if (searchNum < sortedNums[middle]){
        right = middle-1
    }
    else {
        left = middle +1
    }
    return binarySearch(sortedNums, searchNum, left, middle, right)
}
console.log(binarySearch(nums3, searchNum3));

// Christian's solution

function binarySearch(sortedNums, searchNum, leftindex = 0, rightindex = sortedNums.length-1) {
    if (leftindex > rightindex){
        return false
    }
    let half = Math.floor((leftindex + rightindex)/2)
    if (sortedNums[half] == searchNum){
        return true;
    } else if (sortedNums[half] > searchNum){
        return binarySearch(sortedNums, searchNum, leftindex, half - 1)
    } else if (sortedNums[half] < searchNum){
        return binarySearch(sortedNums, searchNum, half + 1, rightindex)
    }
}
console.log(binarySearch(nums1, searchNum1))