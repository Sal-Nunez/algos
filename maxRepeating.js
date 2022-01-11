/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */


var maxRepeating = function (sequence, word) {
    let string = word
    let count = 0
    while (sequence.includes(string)) {
        count++
        string += word
    }
    return count
};

console.log(maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba"))


// var maxRepeating = function (sequence, word) {

//     let count = 0;

//     for (let i = 0; i < sequence.length; i++) {

//         if (sequence[i] === word[0]) {
//             let wordy = true
//             for (let j = 0; j < word.length; j++) {
//                 if (sequence[i + j] !== word[j]) {
//                     wordy = false
//                     break
//                 };
//             }
//             if (wordy) {
//                 count++;
//                 i += word.length - 1;
//             }
//         }
//     }
//     return count;
// };

// console.log(maxRepeating("ababc", "ba"))
// console.log(maxRepeating("ababc", "ab"))
// console.log(maxRepeating("ababcababcccab", "ab"))
// console.log(maxRepeating("dnaijdnaiijsfdnad", "dna"))