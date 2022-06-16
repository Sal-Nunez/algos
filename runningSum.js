/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
    let sum = 0;
    return nums.map((num, i) => sum += num)
};

console.log(runningSum([3,1,2,10,1]))