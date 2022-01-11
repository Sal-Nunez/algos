const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * Best: O(n^2) quadratic.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */


function selectionSort(nums) {
    let bigBoyIndex = 0;
    let unsorted = true;
    let newIndex = 0;
    while(unsorted) {
        console.log(bigBoyIndex)
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > nums[bigBoyIndex]) {
                bigBoy = i;
            }
        }
        console.log(nums)
        // [nums[newIndex], nums[bigBoyIndex]] = [nums[bigBoyIndex], nums[newIndex]]
        let temp = nums[newIndex]
        nums[newIndex] = nums[bigBoyIndex]
        nums[bigBoyIndex] = temp;
        console.log(nums)
        newIndex++
        bigBoyIndex = newIndex
        if (newIndex == nums.length) {
            unsorted = false;
        }
    }
    return nums
}
console.log(selectionSort(numsRandomOrder))