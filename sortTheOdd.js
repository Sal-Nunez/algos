// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


function sortArray(array) {
    // Return a sorted array.
    let odds = []
    let oddsIndex = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            odds.push(array[i])
            oddsIndex.push(i)
        }
    }
    odds.sort().forEach((num, i) => array[oddsIndex[i]] = num)
    return array
}





const answer1 = sortArray([7, 1])
const answer2 = sortArray([5, 8, 6, 3, 4])
const answer3 = sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
const answer4 = sortArray([5, 3, 2, 8, 1, 4])
const answer5 = sortArray([5, 3, 1, 8, 0])

console.log(answer1, answer1.toString() === [1, 7].toString())
console.log(answer2, answer2.toString() === [3, 8, 6, 5, 4].toString())
console.log(answer3, answer3.toString() === [1, 8, 3, 6, 5, 4, 7, 2, 9, 0].toString())
console.log(answer4, answer4.toString() === [1, 3, 2, 8, 5, 4].toString())
console.log(answer5, answer5.toString() === [1, 3, 5, 8, 0].toString())