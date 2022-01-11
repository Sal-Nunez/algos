/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
function trim(str) {
    console.log(str[0] == false)
    let startinx = 0;
    let endidx = str.length-1;

    while (str[startinx] == false) {
        startinx++
    }

    while (str[endidx] == false) {
        endidx--;
    }
    return str.slice(startinx, endidx + 1)
}

    console.log(trim(str1))


/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [8, -2, 10, 1, 1, 1, 1, 1, 1];
const expected3 = 2;
/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
    let left = nums[0]
    let right = 0
    if (nums.length < 3){
        return -1
    }

    for(let i = 0; i < nums.length; i++) {
        right += nums[i]
        console.log(right);
    }

    for (let i = 0; i< nums.length - 1; i++){
        if(left == right){
            return i
        }
        right -= nums[i+1]
        left += nums[i]
        console.log(left, right);
    }
    return -1
}

console.log(balanceIndex(nums1));