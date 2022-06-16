/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */


// const removeElement = (nums, val) => {
//     if (nums.length === 0) return 0;
//     let i = 0;
//     for (let j = 1; j < nums.length; j++) {
//         if(nums[i] !== val) {
//             i++
//             nums[i] = nums[j]
//         }
//     }
//     return ++i
// };


const removeElement = (nums, val) => {
    if (nums.length === 0) return 0;
    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        if (nums[i] === val) {
            nums[i] = nums[j];
            j--;
            i++;
        } else i++;
        if (nums[j] === val) j--
    }
    return ++i
};