/* 
  Given two arrays, interleave them into one new array.
  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 * for loop 
 */
function interleaveArrays(arr1, arr2) {
    let newStr = []
    if (arr1.length > arr2.length){
        for (let i = 0; i < arr1.length; i++){
            if (arr1[i] || arr1[i] === 0){
                newStr.push(arr1[i])
            }
            if (arr2[i] || arr2[i] === 0){
                newStr.push(arr2[i])
            }
        }
    } else{
        for (let i = 0; i < arr2.length; i++){
            if (arr1[i] || arr1[i] === 0){
                newStr.push(arr1[i])
            }
            if (arr2[i] || arr2[i] === 0){
                newStr.push(arr2[i])
            }
        }
    }
    return newStr
}
// console.log(interleaveArrays(arrA3, arrB3));
/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted .
  Bonus (alumni interview): 
    first complete it without the bonus, because they ask for additions
    after the initial algo is complete
    return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected11 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected12 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected13 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected14 = 14;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 * 1. start in the middle if not number find out if its bigger or smaller
 * 2. if bigger go to 3/4 and check number again if not number check if smaller or bigger
 * 3. if smaller go to 1/4 and check the number again if not number check if smaller or bigger
 */
function binarySearch(sortedNums, searchNum) {
    index = Math.floor(sortedNums.length/2)
    if (sortedNums[0] == searchNum) {
        return true;
    }
    for (let i = 0; i < sortedNums.length/2; i++){
        console.log(index);
            if (searchNum == sortedNums[index]){
                return true
            }
            else if (searchNum < sortedNums[index]) {
                index /= 2
                Math.floor(index)
            }
            else if (searchNum > sortedNums[index]){
                index *= 1.5
                Math.floor(index)
                }
    }
    return false
}

console.log(binarySearch(nums2, searchNum2));