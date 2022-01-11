function findEvenIndex(arr) {
    let left = arr[0]
    let right = 0
    if (arr.length == 1 || arr.length == 2 && arr[1] == 0) {
        return 0;
    }
    if (arr.length == 2 && arr[0] == 0) {
        return 1;
    }
    for (let i = 0; i < arr.length; i++) {
        right += arr[i]
    }
    for (let i = 0; i < arr.length - 1; i++) {
        if (left == right) {
            return i
        }
        right -= arr[i + 1]
        left += arr[i]
    }
    if (left == right) {
        return arr.length - 1
    }
    return -1
}

function findEvenIndex(arr) {
    var left = 0, right = arr.reduce(function (pv, cv) { return pv + cv; }, 0);
    for (var i = 0; i < arr.length; i++) {
        if (i > 0) left += arr[i - 1];
        right -= arr[i];
        if (left == right) return i;
    }
    return -1;
}

function findEvenIndex(arr) {
    let left = 0;
    let right = arr.reduce((s, n) => s + n, 0);
    for (let i = 0; i < arr.length; i++) {
        right -= arr[i];
        if (left === right) return i;
        left += arr[i];
    }
    return -1;
}