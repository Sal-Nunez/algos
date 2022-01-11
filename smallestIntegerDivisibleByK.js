// 1015. Smallest Integer Divisible by K
// Medium

// 836

// 691

// Add to List

// Share
// Given a positive integer k, you need to find the length of the smallest positive integer n such that n is divisible by k, and n only contains the digit 1.

// Return the length of n.If there is no such n, return -1.

// Note: n may not fit in a 64 - bit signed integer.



//     Example 1:

// Input: k = 1
// Output: 1
// Explanation: The smallest answer is n = 1, which has length 1.
// Example 2:

// Input: k = 2
// Output: -1
// Explanation: There is no such positive integer n divisible by 2.
// Example 3:

// Input: k = 3
// Output: 3
// Explanation: The smallest answer is n = 111, which has length 3.


// Constraints:

// 1 <= k <= 105

/**
 * @param {number} k
 * @return {number}
 */
// const smallestRepunitDivByK = function (k) {
//     if (k % 2 === 0 || k % 5 === 0) return -1
//     let n = 1
//     let length = 1
//     while (true) {
//         if (n % k === 0) return length
//         length += 1
//         n = 10*n + 1
//     }
//     // while (BigInt(n) < 10e63) {}
//     return -1
// }

const smallestRepunitDivByK = (k) => {
    let n = 0;
    for (let i = 1; i < 1e6; i++) {
        n = (n * 10 + 1) % k
        if (n == 0) return i
    }
    return -1
}


console.log(smallestRepunitDivByK(5))
console.log(smallestRepunitDivByK(3333))
console.log(smallestRepunitDivByK(19927))