const x = 7
const y = 4
const z = 2
const a = 7607
const b = 7609
const c = 1
const d = 614848771
const e = 1907890253

const isPrime = (num) => {
    if (num !== 2 && num % 2 === 0 || num < 2) return false
    for (let i = 3; i < Math.sqrt(num) + 1; i+=2) if (num % i === 0) return false
    return true
}

// const isPrime = num => {
//     for(let i = 2, s = Math.sqrt(num); i <= s; i++)
//         if(num % i === 0) return false; 
//     return num > 1;
// }

console.log(isPrime(x)) // true
console.log(isPrime(y)) // false
console.log(isPrime(z)) // true
console.log(isPrime(a)) // true
console.log(isPrime(b)) // false
console.log(isPrime(c)) // false
console.log(isPrime(d)) // false
console.log(isPrime(e)) // true
console.log(isPrime(9)) // false