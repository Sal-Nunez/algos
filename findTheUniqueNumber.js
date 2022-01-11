function findUniq(arr) {
    let count;
    let sameCount;
    for (let i = 0; i < arr.length; i++) {
        count = 0;
        sameCount = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                sameCount++
                if (sameCount > 1) {
                    break
                }
            } else {
                count++
            }
            if (count == arr.length - 1) {
                return arr[i]
            }
        }
    }
}

function findUniq(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] == arr[1] ? arr.pop() : arr[0]
}

function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

function findUniq(arr) {
    let [a, b, c] = arr.slice(0, 3);
    if (a != b && a != c) return a;
    for (let x of arr) if (x != a) return x
}

function findUniq(arr) {
    let uniq = {},
        result;
    arr.forEach(function (item) {
        uniq[item] = uniq[item] + 1 || 1;
    });
    Object.keys(uniq).forEach(function (key) {
        if (uniq[key] == 1) {
            result = key;
        }
    });

    return parseFloat(result);
}