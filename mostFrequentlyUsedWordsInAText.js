// ASCII.
// Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
// Examples:
// top_3_words("In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.")
// # => ["a", "of", "on"]

// top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
// # => ["e", "ddd", "aa"]

// top_3_words("  //wont won't won't")
// # => ["won't", "wont"]
// Bonus points (not really, but just for fun):
// Avoid creating an array whose memory footprint is roughly as big as the input text.
// Avoid sorting the entire array of unique words.


function topThreeWords(text) {
    let arr = []
    let freq = {}
    arr = text.split(' ').filter(word => /[A-Za-z]/.test(word)).map(word => {
        word.toLowerCase()
        if (!/[a-z]/.test(word[0])) for (let i = 0; i < word.length; i++) if(/[a-z]/.test(word[i])) return word.substring(i)
        if (!/[a-z]/.test(word[word.length - 1])) for (let i = word.length - 1; i > -1; i--) if(/[a-z]/.test(word[i])) return word.substring(0, i)
        return word
    })
    arr.forEach((word, i) => freq[word] ? freq[word] += 1 : freq[word] = 1)
    let answer = []
    while(Object.keys(freq).length !== 0 && answer.length !== 3) {
        let biggest = 0;
        let biggestWord = ''
        for (const word in freq) {
            if (Object.hasOwnProperty.call(freq, word)) {
                if (freq[word] > biggest) {
                    biggest = freq[word]
                    biggestWord = word
                }
            }
        }
        answer.push(biggestWord)
        delete freq[biggestWord]
    }
    return answer
}


const answer1 = topThreeWords('a a a  b  c c  d d d d  e e e e e')
const answer2 = topThreeWords('a a c b b')
const answer3 = topThreeWords('e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e')
const answer4 = topThreeWords("  //wont won't won't ")
const answer5 = topThreeWords('  , e   .. ')
const answer6 = topThreeWords('  ...  ')
const answer7 = topThreeWords("  '  ")

console.log(answer1, answer1.toString() === ['e','d','a'].toString())
console.log(answer2, answer2.toString() === ['a','b','c'].toString())
console.log(answer3, answer3.toString() === ['e','ddd','aa'].toString())
console.log(answer4, answer4.toString() === ["won't", "wont"].toString())
console.log(answer5, answer5.toString() === ["e"].toString())
console.log(answer6, answer6.toString() === [].toString())
console.log(answer7, answer7.toString() === [].toString())


// other solutions

// let topThreeWords = text => {
//     let dict = new Map();
//     text.replace(/[A-z']+(?=[ ]+|$)/g, match => {
//         let word = match.toLowerCase();
//         dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);
//     });
//     dict.delete("'");
//     return [...dict].sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, 3);
// };

// function topThreeWords(text) {
//     let words = {}
//     text.toLowerCase().replace(/([A-Za-z][A-Za-z']*)/g, match => {
//       let c = words[match] || 0
//       words[match] = ++c
//     })
//     return Object
//             .keys(words)
//             .sort(function(a,b){return words[b]-words[a]})
//             .slice(0,3)
//   }

//   const topThreeWords = text => {
//     let total = (text.toLowerCase().match(/\b[a-z']+\b/g)||[]).reduce((acc,cur) => (acc[cur] = (acc[cur]||0) + 1, acc), {});
//     return Object.keys(total).sort((a,b) => total[b] - total[a]).slice(0,3);
//   };