/*
Given a SORTED array of integers, dedupe the array 
Because array elements are already in order, all duplicate values will be grouped together.
Ok to use a new array
Bonus: do it in O(n) time (no nested loops, new array ok)
Bonus: Do it in-place (no new array)
Bonus: Do it in-place in O(n) time and no new array
Bonus: Keep it O(n) time even if it is not sorted
*/

const two_nums1 = [1, 1, 1, 1];
const two_expected1 = [1];

const two_nums2 = [1, 1, 2, 2, 3, 3];
const two_expected2 = [1, 2, 3];

const two_nums3 = [1, 1, 2, 3, 3, 4];
const two_expected3 = [1, 2, 3, 4];

const two_nums4 = [1, 1];
const two_expected4 = [1];

/**
* De-dupes the given sorted array.
* - Time: O(?).
* - Space: O(?).
* @param {Array<number>} nums
* @returns {Array<number>} The given array deduped.
*/
function dedupeSorted(nums) {}

// *******************************************************************************

/* 
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else
  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

const one_nums1 = [3, 5, 4, 3, 4, 6, 5];
const one_expected1 = 6;

const one_nums2 = [3, 5, 5];
const one_expected2 = 3;

const one_nums3 = [3, 3, 5];
const one_expected3 = 5;

const one_nums4 = [5];
const one_expected4 = 5;

const one_nums5 = [];
const one_expected5 = null;

/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */

function firstNonRepeated(nums) {}