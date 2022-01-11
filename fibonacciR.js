
[0, 1, 1, 2, 3, 5, 8, 13, 21]


function fibonacciR(num, fibArr=[0, 1], count=0){
    var fibArr
    var count
    if (count >= num){
        return fibArr[num]
    }
    fibArr.push((fibArr[fibArr.length-1] + fibArr[fibArr.length-2]))
    count++
    return fibonacciR(num, fibArr, count)
}

console.log(fibonacciR(10));