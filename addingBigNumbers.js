// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"

// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

// function add(a, b) {
//     return (Number(a) + Number(b)).toString(); // Fix me!
// }

// this is not a valid answer although it works
// const add = (a, b) => (BigInt(a) + BigInt(b)).toString()

const add = (a, b) => {
    let i = a.length - 1
    let j = b.length - 1
    let reverseString = ""
    let remainder = 0
    while (i > -1 || j > -1) {
        let addedNum
        let num1
        let num2
        i > -1 ? num1 = parseInt(a[i--]) : num1 = 0
        j > -1 ? num2 = parseInt(b[j--]) : num2 = 0
        addedNum = num1 + num2
        addedNum + remainder > 9 ? (addedNum = (addedNum + remainder).toString(), reverseString += parseInt(addedNum[1]), remainder = 1) : (reverseString += (addedNum + remainder), remainder = 0)
        // if (addedNum + remainder > 9) {
        //     addedNum = (addedNum + remainder).toString()
        //     reverseString += parseInt(addedNum[1])
        //     remainder = 1
        // } else {
        //     reverseString += (addedNum + remainder)
        //     remainder = 0
        // }
    }
    return (remainder > 0 ? reverseString += remainder : reverseString).split('').reverse().join('')
}

const answer1 = add('1', '1')
const answer2 = add('123', '456')
const answer3 = add('888', '222')
const answer4 = add('1372', '69')
const answer5 = add('12', '456')
const answer6 = add('101', '100')
const answer7 = add('63829983432984289347293874', '90938498237058927340892374089')

console.log(answer1, answer1 === '2') // expected '2'
console.log(answer2, answer2 === '579') // expected '579'
console.log(answer3, answer3 === '1110') // expected '1110'
console.log(answer4, answer4 === '1441') // expected '1441'
console.log(answer5, answer5 === '468') // expected '468'
console.log(answer6, answer6 === '201') // expected '201'
console.log(answer7, answer7 === '91002328220491911630239667963') // expected '91002328220491911630239667963'

// //other solutions

// function add(a, b) {
//     var res = '', c = 0
//     a = a.split('')
//     b = b.split('')
//     while (a.length || b.length || c) {
//         c += ~~a.pop() + ~~b.pop()
//         res = c % 10 + res
//         c = c > 9
//     }
//     return res
// }

// function add(a, b) {
//     var carry = 0, result = [],
//         len = Math.max(a.length, b.length), i = len;
//     while (i--) {
//         var sum = (+a[i - len + a.length] || 0) + (+b[i - len + b.length] || 0) + carry;
//         carry = parseInt(sum / 10);
//         result.unshift(sum % 10);
//     }
//     if (carry) result.unshift(carry);
//     return result.join('');
// }

// /*
// Method is this - we add each of the digits one buy one from the end of the string.
// */
// function add(a, b) {
//     a = '0' + a //we add a zero upfront to make space for '1' if sum of digits are greater than 10
//     b = '0' + b

//     if (a.length > b.length) { //Then we add more '0''s to make a,b strings equal length
//         var zeroCount = a.length - b.length
//         b = (Array(zeroCount + 1).join('0')) + b
//     } else if (b.length > a.length) {
//         var zeroCount = b.length - a.length
//         a = (Array(zeroCount + 1).join('0')) + a
//     }

//     var result = '';
//     var temp = 0;
//     for (var i = a.length - 1; i > -1; i--) { //for every digit from the end...
//         var res = parseInt(a[i]) + parseInt(b[i]) + temp // we sum them + temp variable.
//         temp = 0 //we renew the temp var
//         if (res >= 10) { //if our sum if greater than 10 we put '1' to the temp var so that next calculation will include the previous addition
//             res = res - 10
//             temp = 1
//         }
//         result = res + result // we add result to the string at front
//     }


//     if (result[0] == '0') //sometimes resulting string begins with a zero (if those we added in first line are unneded )
//         result = result.substr(1) //that unneeded zero has to be removed

//     return result
// }