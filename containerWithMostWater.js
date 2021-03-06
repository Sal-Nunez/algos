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


function containerWithMostWater(heights) {
    let biggestContainer = 0;
    for (let i = 0; i < heights.length - 1; i++) {
        for (let j = i + 1; j < heights.length; j++) {
            let num;
            heights[i] > heights[j] ? num = heights[j] : num = heights[i];
            let current = (j - i) * num;
            if (current > biggestContainer) biggestContainer = current;
        }
    }
    return biggestContainer
}

const containerWithMostWater = (heights) => {
    let biggestContainer = 0;
    let i = 0
    let j = heights.length -1
    while (j > i) {
        Math.max(biggestContainer, Math.min(heights[i], heights[j]) * (j - i))
        heights[i] <= heights[j] ? i++ : j--
    }
    return biggestContainer
}