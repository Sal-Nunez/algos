function deleteNth(arr, n) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++
                if (count > n) {
                    arr = arr.slice(0, j).concat(arr.slice(j + 1, arr.length))
                    j--
                }
            }
        }
    }
    return arr
}

function deleteNth(arr, x) {
    var cache = {};
    return arr.filter(function (n) {
        cache[n] = (cache[n] || 0) + 1;
        return cache[n] <= x;
    });
}

function deleteNth(arr, x) {
    var count = {};
    return arr.filter(function (a) {
        count[a] = ~~count[a] + 1;
        return count[a] <= x;
    })
}

const deleteNth = (a, x) => {
    let m = {};
    return a.filter(v => (m[v] = m[v] + 1 || 1) <= x);
}