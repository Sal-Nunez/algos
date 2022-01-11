const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
// CREATE A LOOP TO KEEP ON ITERATING THROUGH THE ARRAY MULTIPLES TIMES
// CRATE A LOOP TO ITERATE THROUGH THE ARRAY
    // COMPARE THE ADJANCET VALUES
    // SWAP THE VALUES IF THE LEFT VALUE IS GREATER THAN THE RIGHT
function bubbleSort(nums) {
    let unordered = true;
    while (unordered) {
        // let count = 0;
        for (let i = 0; i < nums.length-1; i++) {
            console.log(nums, i);
            if (nums[i] > nums[i+1]) {
                let temp = nums[i]
                nums[i] = nums[i+1]
                nums[i+1] = temp
            } else {
                // count++
                // if (count == nums.length-1) {
                //     unordered = false;
                // }
            }
        }
    }
    return nums;
}
console.log(bubbleSort(numsRandomOrder));
// CHALLENEGE: AN EARLY EXIT IF YOUR ARRAY IS ALREADY SORTED