// Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

// Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.

// However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

// Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).

const handshakes1 = 0
const expected1 = 1

const handshakes2 = 1
const expected2 = 2

const handshakes3 = 3
const expected3 = 3

const handshakes4 = 6
const expected4 = 4

const handshakes5 = 7
const expected5 = 5

const getParticipants = handshakes => {
    
}


// // 1 handshake // 2
// 2 * 0 + 2
// [1, 2]
// // 2 handshakes // 3
// 2
// [1, 3]
// // 3 handshakes // 3
// 3
// [2, 3]
// // 4 handshakes // 4
// [1, 4]
// // 5 handshakes // 4
// [2, 4]
// // 6 handshakes // 4
// [3, 4]
// // 7 handshakes // 5
// [1, 5]
// // 8 handshakes // 5
// [2, 5]
// // 9 handshakes // 5
// [3, 5]
// // 10 handshakes // 5
// [4, 5]


const exampleArray = [1, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6]





const array = number => {
    let arr = [1]
    let i = 0
    while (true) {
        let count = 0
        while(count < i) {
            arr.push(i + 1)
            count ++
            if (arr.length > number) return arr[number]
        }
        i++
    }
}
console.log(array(10))