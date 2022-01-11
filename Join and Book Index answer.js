/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided


  1. create a function that takes in a list and a sperator
  2. loop through list ....
  3. 
  4.

*/


const arr1 = [1, 2, 3];
const separator1 = ", ";
const Aexpected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const Aexpected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const Aexpected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const Aexpected4 = "1";

const arr5 = [];
const separator5 = ", ";
const Aexpected5 = "";

/**
 * Converts the given array into a string of items separated by the given separator.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string|number|boolean>} arr The items to be joined as a string.
 * @param {string} separator To separate each item of the given arr.
 * @returns {string} The given array items as a string separated by the given separator.
 */
function join(arr, separator) {
    let joined = ""

    if (arr.length === 0){
        return joined
    }

    for (let i=0; i<arr.length - 1; i++){
        console.log(arr[i]);
        joined += arr[i] + separator
    }
    joined += arr[arr.length - 1]
    return joined
}

console.log(join(arr5, separator1));

/* 
Book Index
Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const Bexpected1 = "1, 13-15, 37-38, 70";

const nums2 = [75];
const Bexpected2 = "75";

const nums3 = [];
const Bexpected3 = "";

// const nums4 = [75, 76, 'nooo', 80, 81];
// const Bexpected4 = False;

/** 
 * Turns the given arr of page numbers into a string of comma hyphenated
 * page ranges.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Page numbers.
 * @returns {string} The given page numbers as comma separated hyphenated
 *    page ranges.
 * 
 */
function bookIndex(pageNums) {
    let formattedPages = ""
    let pageRangeStartIdx = 0

    for (let i=0; i<pageNums.length; i++){
        let currentPage = pageNums[i]
        let nextPage = pageNums[i+1]
        let pageRangeStopIdx = i

        // if not consecutive
        if (currentPage + 1 !== nextPage){
            // single page, no range
            if (pageRangeStartIdx === pageRangeStopIdx){
                formattedPages += currentPage
            } else {
                formattedPages += `${pageNums[pageRangeStartIdx]}-${pageNums[pageRangeStopIdx]}`
            }
            if (i !== pageNums.length - 1){
                formattedPages += ", "
            }

            pageRangeStartIdx = i + 1
        }
    }
    return formattedPages
}

console.log(bookIndex(nums3));