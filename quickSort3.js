function quickSort(arr) {

    if(arr.length <= 1) {                        
        return arr;
    }
    
    let pivotIndex = Math.floor(arr.length/2);   // find the middle index of the array
    let pivot = arr.splice(pivotIndex, 1)[0];    // splice seperate the pivot away from the array
    let left = [];                               // 
    let right = [];
    
    for(let i=0; i<arr.length; i++) {
        if(arr[i] <= pivot) {
            left.push(arr[i]);    //any value less than pivot will be move to the left arry,  
        }else {
            right.push(arr[i]);   //any value greater than pivot will be move to the right arry,     
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))   //Put left array, then concat the pivot value, and the right array together
};
