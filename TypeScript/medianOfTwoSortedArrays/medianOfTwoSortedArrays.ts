const findMedianSortedArrays = (nums1: number[], nums2: number[]): number =>
{
    let arr: number[] = nums1.concat(nums2).sort((a, b) => a - b);
    console.log(arr);
    if (arr.length % 2 === 0) {
        return (arr[arr.length/2] + arr[arr.length/2 - 1])/2
    } else return (arr[Math.floor(arr.length/2)])
};

console.log(findMedianSortedArrays([1, 5, 4], [3, 2]))

export {};