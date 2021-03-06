/* 
Array: Mode

Create a function that, given an array of ints,
returns the int that occurs most frequently in the array.
What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
    - return empty array
*/

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];

const nums6 = [5, 1, 4, 1, 5, 4];
const expected6 = [];
//  - order doesn't matter
/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */
// function mode(nums) {
// }

function mode(nums) {
    let freq = {}
    nums.forEach((e) => (freq[e] === undefined ? (freq[e] = 1) : freq[e]++))
    if (Object.keys(freq).length === 1) {
        return Object.keys(freq).map((e) => Number(e))
    }
    let mul = 1
    for (key in freq) {
        mul = freq[key] > mul ? freq[key] : mul
    }
    let arr = []
    if (mul === 1) return arr
    for (key in freq) {
        if (freq[key] === mul) {
            arr.push(Number(key))
        }
    }
    return Object.keys(freq).length === arr.length ? [] : arr
}

function mode(nums) {
    let freq = {}
    nums.forEach((e) => (freq[e] === undefined ? (freq[e] = 1) : freq[e]++))
    if (Object.keys(freq).length === 1) {
        return Object.keys(freq).map((e) => Number(e))
    }
    let mul = 1
    Object.values(freq).forEach((e) => (mul = e > mul ? e : mul))

    let arr = []
    if (mul === 1) return arr
    for (key in freq) {
        if (freq[key] === mul) {
            arr.push(Number(key))
        }
    }
    return Object.keys(freq).length === arr.length ? [] : arr
}

function mode(nums) {
    let freq = {}
    nums.forEach((e) => (freq[e] === undefined ? (freq[e] = 1) : freq[e]++))
    let mul = 1
    Object.values(freq).forEach((e) => (mul = e > mul ? e : mul))
    let arr = []
    for (key in freq) {
        if (freq[key] === mul) {
            arr.push(Number(key))
        }
    }
    return Object.keys(freq).length === 1 ?
        Object.keys(freq).map((e) => Number(e)) :
        mul === 1 ?
            [] :
            Object.keys(freq).length === arr.length ?
                [] :
                arr
}
function mode(nums) {
    let freq = {}
    nums.forEach((e) => (freq[e] === undefined ? (freq[e] = 1) : freq[e]++))
    let mul = 1
    Object.values(freq).forEach((e) => (mul = e > mul ? e : mul))
    let arr = []
    for(key in freq){if(freq[key] === mul){arr.push(Number(key))}}
    return Object.keys(freq).length === 1 ?
        Object.keys(freq).map((e) => Number(e)) :
        mul === 1 ?
            [] :
            Object.keys(freq).length === arr.length ?
                [] :
                arr
}
