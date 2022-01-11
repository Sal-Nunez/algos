// 1094. Car Pooling
// Medium

// 2438

// 58

// Add to List

// Share
// There is a car with capacity empty seats.The vehicle only drives east(i.e., it cannot turn around and drive west).

// You are given the integer capacity and an array trips where trip[i] = [numPassengersi, fromi, toi] indicates that the ith trip has numPassengersi passengers and the locations to pick them up and drop them off are fromi and toi respectively.The locations are given as the number of kilometers due east from the car's initial location.

// Return true if it is possible to pick up and drop off all passengers for all the given trips, or false otherwise.



//     Example 1:

// Input: trips = [[2, 1, 5], [3, 3, 7]], capacity = 4
// Output: false
// Example 2:

// Input: trips = [[2, 1, 5], [3, 3, 7]], capacity = 5
// Output: true


// Constraints:

// 1 <= trips.length <= 1000
// trips[i].length == 3
// 1 <= numPassengersi <= 100
// 0 <= fromi < toi <= 1000
// 1 <= capacity <= 105
// Accepted
// 120, 323
// Submissions
// 202, 678

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */

const carPooling = (trips, capacity) => {
    let pickingUp = {}
    let droppingOff = {}
    let list = []
    let inCar = 0
    for (let i = 0; i < trips.length; i++) {
        let pickUp = trips[i][1]
        let dropOff = trips[i][2]
        let peopleAtStop = trips[i][0]
        list = [...list, pickUp, dropOff]
        pickingUp[pickUp] = pickingUp[pickUp] ? pickingUp[pickUp] += peopleAtStop : peopleAtStop
        droppingOff[dropOff] = droppingOff[dropOff] ? droppingOff[dropOff] += peopleAtStop : peopleAtStop
    }
    list.sort((a, b) => a - b)
    list = [...new Set(list)]
    console.log(pickingUp, droppingOff, list)
    for (let i = 0; i < list.length; i++) {
        if (droppingOff[list[i]]) {
            inCar -= droppingOff[list[i]]
        }
        if (pickingUp[list[i]]) {
            inCar += pickingUp[list[i]]
        }
        if (inCar > capacity) return false
    }
    return true
}



console.log(carPooling([[2, 1, 5], [3, 3, 7]], 5));
console.log(carPooling([[2, 1, 5], [3, 3, 7]], 4));
console.log(carPooling([[2, 1, 5], [3, 3, 7], [4, 8, 10]], 5));
console.log(carPooling([[2,1,5],[3,5,7]], 3));
console.log(carPooling([[9,3,4],[9,1,7],[4,2,4],[7,4,5]], 23));



// var carPooling = function (trips, capacity) {
//     if (trips[0][0] > capacity) return false
//     let inCar = []
//     let numberInCar = 0
//     for (let i = 0; i < trips.length; i++) {
//         inCar.push((trips[i][0], trips[i][2]))
//         numberInCar += trips[i][0]
//         console.log(inCar)
//         if (numberInCar > capacity) return false
//         if(i < trips.length) {
//             if (trips[i+1][1] > trips[i][2]) {
//                 numberInCar -= trips[i][0]
//                 inCar.shift(0)
//             }
//         }
//     }
//     return true
// };