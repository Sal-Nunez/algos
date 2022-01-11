const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array = [8, 5, 3, 2, 0, 1]
// const insertionSort = (arr) => {
//     for (let i = 1; i < arr.length - 1; i++) {
//         let big = arr[i]
//         let x = i-1
//         for (let j = i-1; j > -1 ; j--) {
//             if (j > -1 && big < arr[j]) {
//                 arr[j+1] = arr[x];
//                 // [arr[i], arr[j]] = [arr[j], arr[i]];
//                 j--
//             }
//         }
//         arr[x+1] = big
//     }
// return arr;
// }

function insertionSort(arr) {
        for (let i = 1; i < arr.length; i++) {
            let bigBoy = arr[i];
            let j = i-1; 
            while ((j > -1) && (bigBoy < arr[j])) {
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = bigBoy;
        }
    return arr;
}

function createArray(num){
    let array = [];
    let count = 0;
    while (count < num) {
        let newNum = (Math.floor((Math.random() * 100000) + 1));
        array.push(newNum);
        count++;
    }
    return array;
}

console.log(insertionSort(createArray(100000)))