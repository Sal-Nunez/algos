function comp(array1, array2) {
    console.log(array1, array2)
    if (array1 == null || array2 == null) {
        return false;
    }
    if (array1.length != array2.length) {
        return false;
    }
    var yes = 0;
    var numbersUsed = [{}, {}]
    for (const number of array1) {
        for (const numberSquared of array2) {
            if (number * number == numberSquared) {
                console.log("in add 1", number, number * number, numberSquared)
                yes += 1
                if (numbersUsed[1][numberSquared]) {
                    numbersUsed[1][numberSquared] += 1
                } else {
                    numbersUsed[1][numberSquared] = 1
                }
                break;
            }
        }
        if (yes == 0) {
            return false
        } else {
            yes = 0
        }
    }
    for (const numberSquared of array2) {
        if (numbersUsed[0][numberSquared]) {
            numbersUsed[0][numberSquared] += 1
        } else {
            numbersUsed[0][numberSquared] = 1
        }
    }
    console.log(numbersUsed)
    if (JSON.stringify(numbersUsed[0]) != JSON.stringify(numbersUsed[1])) {
        return false;
    }
    return true;
}

function comp(array1, array2) {
    if (array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

function comp(a, b) {
    return !!a && !!b && a.map(x => x * x).sort().join() == b.sort().join();
}