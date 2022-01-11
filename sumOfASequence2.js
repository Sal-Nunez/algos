// As the title suggests, this is the hard-core version of another neat kata.

// The task is simple to explain: simply sum all the numbers from the first parameter being the beginning to the second parameter being the upper limit (possibly included), going in steps expressed by the third parameter:

// sequenceSum(2,2,2) === 2
// sequenceSum(2,6,2) === 12 // 2 + 4 + 6
// sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
// sequenceSum(1,5,3) === 5 // 1 + 4
// If it is an impossible sequence (with the beginning being larger the end and a positive step or the other way around), just return 0. See the provided test cases for further examples :)

// Note: differing from the other base kata, much larger ranges are going to be tested, so you should hope to get your algo optimized and to avoid brute-forcing your way through the solution.

function sequenceSum(begin, end, step) {
    if(begin > end && step > 0) return 0;
    if(begin < end && step < 0) return 0;
    let sum = begin
    let num = begin
    if (step < 0) {
        while (num + step >= end) {
            num += step
            sum += num
        }
    } else {
        while (num + step <= end) {
            num += step
            sum += num
        }
    }
    return sum
}

const answer1 = sequenceSum(2, 6, 2)
const answer2 = sequenceSum(1, 5, 1)
const answer3 = sequenceSum(1, 5, 3)
const answer4 = sequenceSum(-1, -5, -3)
const answer5 = sequenceSum(16, 15, 3)
const answer6 = sequenceSum(-24, -2, 22)
const answer7 = sequenceSum(-2, 4, 658)
const answer8 = sequenceSum(780, 68515438, 5)
const answer9 = sequenceSum(9383, 71418, 2)
const answer10 = sequenceSum(20, 67338879, 5)

console.log(answer1 === 12)
console.log(answer2 === 15)
console.log(answer3 === 5)
console.log(answer4, answer4 === -5)
console.log(answer5 === 0)
console.log(answer6 === -26)
console.log(answer7 === -2)
console.log(answer8 === 469436517521190)
console.log(answer9 === 1253127200)
console.log(answer10 === 453452442295970)