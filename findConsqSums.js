const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
    [2, 5, 3, 6],
    [3, 6, 7],
];

// Bonus:
const nums2 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum2 = 16;
const expected2 = [
    [2, 5, 3, 6],
    [3, 6, 7],
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0],
];

// Bonus:
const nums3 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum3 = -16;
const expected3 = [
    [-2, -5, -3, -6],
    [-3, -6, -7],
    [-3, -6, -7, -0],
    [-3, -6, -7, -0, -0],
];

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */
function findConsqSums(nums, targetSum) { 
    let ans = []
    let arr = []
    count = 0
    while(count < nums.length - 1) {
        for(let i = count; i < nums.length; i++){
            arr.push(nums[i])
            let sum = add(arr)
            if(sum == targetSum){
                ans.push(arr)
            }
            if(sum > targetSum && nums[i+1] != 0) {
                arr = []
            }
            if (sum === targetSum && nums[i+1] != 0) {
                arr = []
            }
        }
        count++
    }
    return ans
}

function add(arr){
    let ans = 0
    for(let i = 0; i < arr.length; i++){
        ans += arr[i]
    }
    return ans
}
console.log(findConsqSums(nums2, sum2))