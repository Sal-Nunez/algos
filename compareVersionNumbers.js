/* 
https://leetcode.com/problems/container-with-most-water/
*/

/* 
Finds the container that can hold the most water based on it's area.
A container's length is the distance between indexes and the two sides are
the heights at those indexes.
See: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
*/

const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected1 = 49;
// Explanation: heights1[1] and heights1[8] as container edges.
// Length = 8 - 1. Height = 7

const heights2 = [1, 1];
const expected2 = 1;

const heights3 = [4, 3, 2, 1, 4];
const expected3 = 16;

const heights4 = [1, 2, 1];
const expected4 = 2;

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */
function compareVersionNumbers(v1, v2) {
    let arr1 = v1.split(".")
    let arr2 = v2.split(".")
    arr1.forEach((num, i) => arr1[i] = parseInt(num))
    arr2.forEach((num, i) => arr2[i] = parseInt(num))
    if (arr1.join() === arr2.join()) {
        return 0
    } else if (arr1 > arr2) {
        return 1
    } else {
        return -1
    }
}

function compareVersionNumbers(v1, v2) {
    var longer = 0;
    let arr1 = v1.split('.').map(num => parseInt(num))
    let arr2 = v2.split('.').map(num => parseInt(num))
    arr1.length < arr2.length ? longer = arr2 : longer = arr1;
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i < longer.length; i++){
        sum1 += arr1[i] ? arr1[i] : 0;
        sum2 += arr2[i] ? arr2[i] : 0;
        if(sum1 < sum2) return -1;
    }
    if(sum1 == sum2) return 0;
    if(sum1 > sum2) return 1;
}