/* 
Amazon is developing a new song selection algorithm that will sync with the
duration of your bus ride.
Given a positive integer representing a duration of a bus ride and
an array of positive integers representing song times, find a pair of two songs
where the song pair ends 30 seconds before the bus ride ends.
return an array of the song indexes or [-1, -1] if no pair is found.
If there are multiple song pairs that match, return the pair that contains the
longest song. The order of the returned indexes doesn't matter.
*/

const busDuration1 = 300;
const songDurations1 = [70, 120, 200, 45, 210, 40, 60, 50];
const expected1 = [4, 6]; // 210, 60
/* Explanation:
There are multiple pairs that add up to 30 seconds before the bus duration.
The pair at indexes 4 and 6 is the pair with the longest song that is chosen.
*/

const busDuration2 = 300;
const songDurations2 = [70, 120, 200, 230, 45, 210, 40, 60, 50];
const expected2 = [3, 6]; // 230, 40
/* Explanation:
This is the pair with the longest song.
*/

const busDuration3 = 300;
const songDurations3 = [70, 120, 20, 23, 45, 21, 40, 60, 50];
const expected3 = [-1, -1]; // not found.

/**
 * Finds the pair of song durations that adds up to 30 seconds before the bus
 * ride ends.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} busDuration Seconds.
 * @param {Array<number} songDurations Seconds.
 * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no
 *    pair is found.
 */

// add pairs of numbers to equal 270 // check if even exists
// compare each number if they do exist to see which one is biggest
// return indexes
function amazonMusicRuntime(busDuration, songDurations) {
    let songTime = busDuration - 30
    let index;
    for (let i = 0; i < songDurations.length - 1; i++) {
        for (let j = i + 1; j < songDurations.length; j++) {
            if (songDurations[i] + songDurations[j] === songTime) {
                if (index) {
                    let max = songDurations[index[0]] > songDurations[index[1]] ? songDurations[index[0]] : songDurations[index[1]]
                    if (songDurations[i] > max || songDurations[j] > max) {
                        index = [i, j]
                    }
                } else {
                    index = [i, j]
                }
            }
        }
    }
    return index ? index : [-1, -1]
}
// function amazonMusicRuntime(busDuration, songDurations) {
//     let songTime = busDuration - 30
//     let index;
//     let i = 0
//     let j = songDurations.length - 1
//     while (i < j) {
//         if (songDurations[i] + songDurations[j] === songTime) {
//             if (index) {
//                 let max = songDurations[index[0]] > songDurations[index[1]] ? songDurations[index[0]] : songDurations[index[1]]
//                 if (songDurations[i] > max) {
//                     index = [i, j]
//                     i += 1
//                 } else if (songDurations[j] > max) {
//                     index = [i, j]
//                     j -= 1
//                 }
//             } else {
//                 index = [i, j]
//             }
//         }
//     }
//     return index ? index : [-1, -1]
// }


console.log(amazonMusicRuntime(busDuration1, songDurations1));
console.log(amazonMusicRuntime(busDuration1, songDurations2));
console.log(amazonMusicRuntime(busDuration1, songDurations3));