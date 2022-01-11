// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
    if (n < 10) return n
    let sum = 0
    n.toString().split('').forEach(num => sum += parseInt(num))
    return digital_root(n = sum)
}



const answer1 = digital_root(16)
const answer2 = digital_root(456)
const answer3 = digital_root(942)
const answer4 = digital_root(132189)
const answer5 = digital_root(493193)

console.log(answer1, answer1 === 7)
console.log(answer2, answer2 === 6)
console.log(answer3, answer3 === 6)
console.log(answer4, answer4 === 6)
console.log(answer5, answer5 === 2)



// other solutions


// const digital_root = n => (n - 1) % 9 + 1

// function digital_root(n) {
//     if (n < 10) return n;
//     return digital_root(
//       n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
//   }


// function digital_root(n) {
//     return--n%9+1;
//   }