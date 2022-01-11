/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
// function merge(left, right) {
//     let newArr = []
//     let count = 0
//     while (left.length > 0 && right.length > 0) {
//         count ++
//         left[0] < right[0] ? newArr.push(left.shift()) : newArr.push(right.shift())
//     }
//     console.log(count)
//     return [...newArr, ...left, ...right]
// }

// function merge(left, right) {
//     let l = r = 0
//     let newArr = []
//     while (l < left.length && r < right.length) {
//         if (left[l] > right[r]) {
//             newArr.push(right[r])
//             r++
//         } else if (left[l] == right[r]) {
//             newArr.push(right[r])
//             newArr.push(left[l])
//             r++
//             l++
//         } else {
//             newArr.push(left[l])
//             l++
//         }
//     }
//     return l < left.length ? newArr.concat(left.slice(l)): r < right.length ? newArr.concat(right.slice(r)) : newArr
// }

function merge(left, right) {
    let l = r = 0
    let newArr = []
    while (l < left.length && r < right.length) {
        left[l] > right[r] ? (newArr.push(right[r]), r++) : left[l] == right[r] ? (newArr.push(right[r]), newArr.push(left[l]), r++, l++) : (newArr.push(left[l]), l++)
    }
    return l < left.length ? newArr.concat(left.slice(l)): r < right.length ? newArr.concat(right.slice(r)) : newArr
}

// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(nums) {
    // BASE CASE
    if (nums.length === 1) {
        return nums
    }
    // FORWARD PROGRESS
    const middleIndex = Math.floor(nums.length / 2)
    const leftArr = nums.slice(0, middleIndex)
    const rightArr = nums.slice(middleIndex)
    // RECURSIVE CALL
    const sortedLeft = mergeSort(leftArr)
    const sortedRight = mergeSort(rightArr)
    return merge(sortedLeft, sortedRight)
}

function createArray(size, range, start){
    let array = [];
    let count = 0;
    while (count < size) {
        let newNum = (Math.floor((Math.random() * range) + start));
        array.push(newNum);
        count++;
    }
    return array;
}

const array1 = createArray(100000, 100000, 1)

console.log(mergeSort(array1))