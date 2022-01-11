function productFib(prod) {
    for (let i = 0; i < prod; i++) {
        if (fibonacciR(i) * fibonacciR(i + 1) == prod) {
            return [fibonacciR(i), fibonacciR(i + 1), true]
        } else if (fibonacciR(i) * fibonacciR(i + 1) > prod) {
            return [fibonacciR(i), fibonacciR(i + 1), false]
        }
    }
}

function fibonacciR(num, fibArr = [0, 1], count = 0) {
    var fibArr
    var count
    if (count >= num) {
        return fibArr[num]
    }
    fibArr.push((fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]))
    count++
    return fibonacciR(num, fibArr, count)
}

function productFib(prod) {
    var n = 0;
    var nPlus = 1;
    while (n * nPlus < prod) {
        nPlus = n + nPlus;
        n = nPlus - n;
    }
    return [n, nPlus, n * nPlus === prod];
}

function productFib(prod) {
    let [a, b] = [0, 1];
    while (a * b < prod) [a, b] = [b, a + b];
    return [a, b, a * b === prod];
}

function productFib(prod) {
    var a = 1
    var b = 1;
    while (a * b < prod) {
        var next = a + b;
        a = b;
        b = next;
    }
    return [a, b, a * b === prod];
}