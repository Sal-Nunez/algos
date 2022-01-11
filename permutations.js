// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:
// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.

const heapsPermute = function (array, n, results = []) {
    n = n || array.length
    if (n === 1 && !results.includes(array.join(''))) results.push(array.join(''))
    else {
        for (let i = 1; i <= n; i++) {
            if(!Array.isArray(array)) array = array.split('')
            heapsPermute(array, n - 1, results)
            n % 2 === 0 ? [array[0], array[n - 1]] = [array[n - 1], array[0]] : [array[i - 1], array[n - 1]] = [array[n - 1], array[i - 1]]
        }
    }
    return results
}

console.log(heapsPermute('limes'))