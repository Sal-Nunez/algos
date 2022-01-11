let array = [4, 8, 5, 7, 1, 6, 10, 2, 3, 9];
function bubbleSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i-1] > arr[i]) [arr[i-1], arr[i]] = [arr[i], arr[i-1]];
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i-1] > arr[i]) bubbleSort(arr);
    }
    return arr;
}
console.log(bubbleSort(array))


// let array = [4, 8, 5, 7, 1, 6, 10, 2, 3, 9];
// function bubbleSort(arr) {
//     let unordered = true;
//     let count = 0;
//     while (unordered) {
//         for (let i = 1; i < arr.length; i++) {
//             if (arr[i-1] > arr[i]) {
//                 [arr[i-1], arr[i]] = [arr[i], arr[i-1]];
//             } else {
//                 count++
//             }
//         }
//         if (count == arr.length-1) {

//         }
//     }
//     return arr;
// }

// console.log(bubbleSort(array))