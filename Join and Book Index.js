/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided


  1. create a function that takes in a list and a sperator
  2. loop through list ....
  3. 
  4.

*/


// const arr1 = [1, 2, 3];
// const separator1 = ", ";
// const Aexpected1 = "1, 2, 3";

// const arr2 = [1, 2, 3];
// const separator2 = "-";
// const Aexpected2 = "1-2-3";

// const arr3 = [1, 2, 3];
// const separator3 = " - ";
// const Aexpected3 = "1 - 2 - 3";

// const arr4 = [1];
// const separator4 = ", ";
// const Aexpected4 = "1";

// const arr5 = [];
// const separator5 = ", ";
// const Aexpected5 = "";

/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @returns {string} The given array items as a string separated by the given separator.
 */
// function join(arr, separator) {
//     newStr = ""
//     for (var i = 0; i < arr.length; i++){
//         newStr += arr[i]
//         if (i == arr.length-1){
//         }
//         else{
//             newStr += separator
//         }
//     }
//     return newStr
// }
// console.log(join(arr5, separator5))

// function join(arr, separator){
//     let joined = ""
//     if(!arr.length){
//         return joined
//     }
// }

/* 
Book Index
Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/



/**
 * Turns the given arr of page numbers into a string of comma hyphenated
 * page ranges.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Page numbers.
 * @returns {string} The given page numbers as comma separated hyphenated
 *    page ranges.
 * 
 * 
 * 1.
 * 2.
 * 3.
 * 4.
 * 5.
 * 6.
 * 7.
 * 
 */
const nums1 = [1, 13, 14, 15, 37, 38, 70];
const Bexpected1 = "1, 13-15, 37-38, 70";

const nums2 = [75];
const Bexpected2 = "75";

const nums3 = [];
const Bexpected3 = "";
// const nums4 = [75, 76, 'nooo', 80, 81];
// const Bexpected4 = False;


function bookIndex(nums) {
    tempStr = []
    newStr = ""
    for (var i = 0; i < nums.length; i++){
        newStr += `${nums[i]}`
        // if (nums[i] != nums[i+1]-1) {
        // }
        //     if (tempStr == []){
        // }
        // else {
        //     newStr += `${tempStr[0]}` + "-" + `${tempStr[tempStr.length-1]}`
        //     tempStr = []
        // }
        // if (nums[i] == nums[i+1]-1){
        //     tempStr.push(nums[i])
        //     tempStr.push(nums[i+1])
        // }
        // console.log(nums[i]);
        console.log("newStr", newStr);
        console.log("tempStr", tempStr);
    }
    return newStr
}

console.log(bookIndex(nums1));

// function bookIndex(nums) {
//     tempStr = []
//     newStr = ""
//     for (var i = 0; i < nums.length; i++){
//         if (nums[i] != nums[i+1]-1) {
//             newStr += nums[i]
//         }
//         if (nums[i] == nums[i+1]-1){
//             tempStr.push(nums[i])
//             tempStr.push(nums[i+1])
//             newStr += tempStr[0] + "-" + tempStr[tempStr.length-1]
//         }
//         // console.log(nums[i]);
//         console.log("newStr", newStr);
//         console.log("tempStr", tempStr);
//     }
//     return newStr
// }

// console.log(bookIndex(nums1));

// function bookIndex(nums) {
//     tempStr = []
//     newStr = ""
//     for (var i = 0; i < nums.length; i++){
//         if (i == nums.length-1){
//         }
//         if (nums[i] == nums[i+1]-1){
//             tempStr.push(nums[i])
//             tempStr.push(nums[i+1])
//         }
//         else{
//             newStr += tempStr[0] + " - " + tempStr[nums.length-1]
//             tempStr = []
//         }
//         if (newStr == ""){
//                 newStr += nums[i]
//         }
//     }
//     return newStr
// }