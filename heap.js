// const permutationsOf = (string) => {

//     // Takes a string, returns an array of all possible permutations.

//     // Declare array that will be storing the permutations.
//     let arrayOfPermutations = [];
//     console.log(arrayOfPermutations)
//     // Iterate over string.
//     for (let i = 0; i < string.length; i++) {

//         // Declare variable to store character of current iteration.
//         let char = string[i];

//         // Check to make sure that we don't repeat characters.
//         if (string.indexOf(char) != i) {
//             continue;
//         }

//         // Slice off remaining characters to run them back through the function.
//         let remainder = string.slice(0, i) + string.slice(i + 1, string.length);

//         // Loop through the recursively returned array of permutations.
//         for (let permutation of permutationsOf(remainder)) {
//             console.log(permutation)
//             arrayOfPermutations.push(char + permutation);
//         }
//     }

//     // Return that array of permutations to be used in other function.
//     return arrayOfPermutations;
// }

// const checkDivisibility = (arr) => {


//     // Declare variable for storing answers
//     let answer = [];

//     // Loop through array, calling permutations function for each string.
//     for (let i = 0; i < arr.length; i++) {
//         let permutations = [permutationsOf(arr[i])];

//         // Loop through each index of the array of permutations, checking for an evenly divisible number by 8.
//         for (let j = 0; j < permutations.length; j++) {

//             if (parseInt(permutations[j]) % 8 === 0) {
//                 answer.push("YES");
//                 break;
//             }
//         }

//         // If no number is found to be evenly divisible by 8, then set answer to no;
//         if (answer[i] === undefined) {
//             answer.push("NO");
//         }
//     }

//     // Return answer array.
//     return answer;
// }

// console.log(permutationsOf("abc"));
// console.log(checkDivisibility(["61", "75"]))

// var swap = function (array, pos1, pos2) {
//     var temp = array[pos1];
//     array[pos1] = array[pos2];
//     array[pos2] = temp;
// };

// var heapsPermute = function (array, output, n) {
//     n = n || array.length; // set n default to array.length
//     if (n === 1) {
//         output(array);
//     } else {
//         for (var i = 1; i <= n; i += 1) {
//             heapsPermute(array, output, n - 1);
//             if (n % 2) {
//                 var j = 1;
//             } else {
//                 var j = i;
//             }
//             swap(array, j - 1, n - 1); // -1 to account for javascript zero-indexing
//         }
//     }
// };


// // For testing:
// var print = function (input) {
//     console.log(input);
// }

// heapsPermute(['a', 'b', 'c', 'd'], print);


// var swap = function (array, pos1, pos2) {
//     var temp = array[pos1];
//     array[pos1] = array[pos2];
//     array[pos2] = temp;
// };

// var heapsPermute = function (array, n, results = []) {
//     n = n || array.length;
//     if (n === 1) {
//         results.push(array.slice());
//     } else {
//         for (var i = 1; i <= n; i += 1) {
//             heapsPermute(array, n - 1, results);
//             if (n % 2) {
//                 var j = 1;
//             } else {
//                 var j = i;
//             }
//             swap(array, j - 1, n - 1);
//         }
//     }
//     return results;
// };

// console.log(heapsPermute(['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd', 'a', 'b', 'c']).map(a => a.join('')));


// function permutationsOf3(str) {
//     let answer = [];
//     for (let i = 0; i < str.length - 1; i++) {
//         let string = ''
//         string += str[i]
//         for (let j = 0; j < str.length; j++) {
//             if(string.length === 3) break
//             if(i === j) continue;
//             string += str[j]
//         }
//         answer.push(string);
//     }
//     return answer;
// }

function permutationsOf3(str) {
    let answer = [];
    let i = 0
    let j = 1
    let string = []
    while (i < str.length) {
        string.push(str[i])
        while (j < str.length) {
            if(string.length === 3) {
                if(!answer.includes(string.join(''))) answer.push(string.join(''))
                string.pop()
            }
            if(i !== j) string.push(str[j])
            j++
        }
        if(string.length === 3) if(!answer.includes(string.join(''))) answer.push(string.join(''))
        string = []
        i++
        j = 0
    }
    return answer;
}

console.log(permutationsOf3('1234567879012345678901234567890123456789012345'))