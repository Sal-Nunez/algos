// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)


const sequenceSum = (begin, end, step) => {
    if (begin > end) return 0
    let sum = begin
    let num = begin
    while (num + step <= end) {
        num += step
        sum += num
    }
    return sum
}

const answer1 = sequenceSum(2, 2, 2)
const answer2 = sequenceSum(2, 6, 2)
const answer3 = sequenceSum(1, 5, 1)
const answer4 = sequenceSum(1, 5, 3)
const answer5 = sequenceSum(16, 15, 3)

console.log(answer1, answer1 === 2) // 2
console.log(answer2, answer2 === 12) // 2 + 4 + 6
console.log(answer3, answer3 === 15) // 1 + 2 + 3 + 4 + 5
console.log(answer4, answer4 === 5) // 1 + 4
console.log(answer5, answer5 === 0)


// Other Solutions

const sequenceSum = (begin, end, step) => {
    if (begin > end) {
        return 0;
    }
    return begin + sequenceSum(begin + step, end, step);
};


function sequenceSum(begin, end, step) {
    let sum = 0
    for (let i = begin; i <= end; i += step) {
        sum += i
    }
    return sum
}

const sequenceSum = (begin, end, step) => {
    if (begin > end)
        return 0;
    const n = Math.floor((end - begin) / step) + 1;
    return (2 * begin + step * (n - 1)) * n / 2;
};