const twoSum = (nums: number[], target: number): number[] => {
let obj: object = {}
let difference: number

for (let i: number = 0; i < nums.length; i++) {
    difference = target - nums[i]
    if (difference in obj) return [obj[difference], i]
    obj[nums[i]] = i
}
};