/* 
    Given an array of strings
    return a sum to represent how many times each array item is found (a frequency table)
    Useful methods:
    Object.hasOwnProperty("keyName")
    - returns true or false if the object has the key or not
    Python: key in dict
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function frequencyTableBuilder(arr) {
    let dictionary = {};
    for (let i = 0; i < arr.length; i++) {
        if (dictionary[arr[i]]){
            dictionary[arr[i]] += 1
        }
        else{
            dictionary[arr[i]] = 1
        }
    }
    return dictionary
}
console.log(frequencyTableBuilder(arr2));



// ********************************************************

/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
1. create a function that takes in an array
2. create an empty dictionary
3. loop through given array
4. check if string is in frequency table
    4.1 YES: add one to the number
    4.2 NO: add the key of the current string with the value of 1
5. return freqTable

*/

const nums1 = [1];
const expectedb1 = 1;

const nums2 = [5, 4, 5];
const expectedb2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expectedb3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expectedb4 = 1;

function oddOccurrencesInArray(nums) {
    let dictionary = {}
    for (let i = 0; i < nums.length; i++){
        if (nums.length == 1){
            return nums[i]
        }
        if (dictionary[nums[i]] == 1){
            delete dictionary[nums[i]];
        }
        else {
            dictionary[nums[i]] = 1
        }
    }
    return +Object.keys(dictionary)[0]
}
console.log(oddOccurrencesInArray(nums3));