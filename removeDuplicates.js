/**
 * @param {number[]} nums
 * @return {number}
 */

let nums1 = [1,1,2]
let nums2 = [0,0,1,1,1,2,2,3,3,4]

// const removeDuplicates = (nums) => {
//     let count = 0;
//     nums.map((num, i) => {
//         if (num === nums[i+1]) {
//             nums[i] = "_"
//         } else {
//             count++
//         }
//     })
//     nums = nums.sort((a, b) => {
//         if (isNaN(a)) return 1
//         if (isNaN(b)) return -1
//         return a - b;
//     });
//     return count;
// };


const removeDuplicates = (nums) => {
    if (nums.length === 0) return 0;
    let i = 0
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++
            nums[i] = nums[j]
            console.log(nums)
        }
        
    }
    return ++i
}

console.log(removeDuplicates(nums2))