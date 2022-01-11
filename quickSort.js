
// NEEDS TO BE FIXED



// const array1 = [16, 17, 18, 4, 15, 8, 14, 5, 3, 13, 7, 1, 20, 6, 12, 10, 2, 3, 3, 11, 19, 9];
const array1 = createArray(5000);
console.log(array1);
const pivot1 = (Math.floor(Math.random() * array1.length));
const valueAtPivot = array1[pivot1]

function createArray(num){
    let array = [];
    let count = 0;
    while (count < num) {
        let newNum = (Math.floor((Math.random() * 1000) + 1));
        array.push(newNum);
        count++;
    }
    return array;
}

function quickSort(array, pivot) {
    let checking = true;
    while (checking){
        let leftIndex = checkLeft(array, pivot)
        let rightIndex = checkRight(array, pivot)
        if (leftIndex != pivot && rightIndex != pivot) {
            [array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]]
        } else if (leftIndex != pivot) {
            let temp = array[leftIndex]
            array[leftIndex] = array[pivot]
            array[pivot] = temp
        } else if (rightIndex != pivot) {
            let temp = array[rightIndex]
            array[rightIndex] = array[pivot]
            array[pivot] = temp
        } else {
            checking = false;
        }
    }
    let checkingleft = true;
    let leftArray = array.slice(0 , pivot);
    let checkingRight = true;
    let rightArray = array.slice(pivot + 1, array.length)
    if (leftArray.length == 0) checkingleft = false;
    if (rightArray.length == 0) checkingRight = false;
    while(checkingleft){
        let pivot = (Math.floor(Math.random() * leftArray.length))
        let leftIndex = checkLeft(leftArray, pivot)
        let rightIndex = checkRight(leftArray, pivot)
        if (leftIndex != pivot && rightIndex != pivot) {
            [leftArray[leftIndex], leftArray[rightIndex]] = [leftArray[rightIndex], leftArray[leftIndex]]
        } else if (leftIndex != pivot) {
            let temp = leftArray[leftIndex]
            leftArray[leftIndex] = leftArray[pivot]
            leftArray[pivot] = temp
        } else if (rightIndex != pivot) {
            let temp = leftArray[rightIndex]
            leftArray[rightIndex] = leftArray[pivot]
            leftArray[pivot] = temp
        } else {
            checkingleft = false;
        }
    }
    while(checkingRight){
        let pivot = (Math.floor(Math.random() * rightArray.length))
        let leftIndex = checkLeft(rightArray, pivot)
        let rightIndex = checkRight(rightArray, pivot)
        if (leftIndex != pivot && rightIndex != pivot) {
            [rightArray[leftIndex], rightArray[rightIndex]] = [rightArray[rightIndex], rightArray[leftIndex]]
        } else if (leftIndex != pivot) {
            let temp = rightArray[leftIndex]
            rightArray[leftIndex] = rightArray[pivot]
            rightArray[pivot] = temp
        } else if (rightIndex != pivot) {
            let temp = rightArray[rightIndex]
            rightArray[rightIndex] = rightArray[pivot]
            rightArray[pivot] = temp
        } else {
            checkingRight = false;
        }
    }
    leftArray.push(array[pivot])
    let completeArray = leftArray.concat(rightArray)
    if (checkingRight == false || checkingleft == false) {
        for (let i = 0; i < completeArray.length; i++){
            if (completeArray[i] > completeArray[i+1]) {
                return quickSort(completeArray, (Math.floor(Math.random() * completeArray.length)))
            }
        }
        return completeArray
    }
}

function checkLeft(array, pivot){
    for (let i = 0; i < pivot; i++) {
        if (array[i] > array[pivot]) {
            return i;
        }
    }
    return pivot;
}

function checkRight(array, pivot){
    for (let j = array.length-1; j > pivot; j--) {
        if (array[j] < array[pivot]) {
            return j;
        }
    }
    return pivot;
}
console.log(quickSort(array1, pivot1));