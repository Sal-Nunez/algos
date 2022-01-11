



const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let index = i
        for (let j = i+1; j < arr.length; j++) {
            if (arr[index] > arr[j]) {
                index = j;
            }
        }
        [arr[i], arr[index]] = [arr[index], arr[i]]
    }
    return arr
}

function createArray(num){
    let array = [];
    let count = 0;
    while (count < num) {
        let newNum = (Math.floor((Math.random() * 100) + 1));
        array.push(newNum);
        count++;
    }
    return array;
}

let array = [4, 8, 5, 7, 1, 6, 10, 2, 3, 9]
console.log(selectionSort(createArray(100)))
// console.log(selectionSort(numsRandomOrder))