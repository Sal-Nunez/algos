// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:
// fizzbuzz(3) -->  [1, 2, "Fizz"]
// fizzbuzz(5) --> [1, 2, "Fizz", 4, "Buzz"]
// fizzbuzz(15) -->  [1, 2, "Fizz", 4, "Buzz"]

const fizzbuzz = num => {
    let arr = [];
    for (let i = 1; i <= num; i++) i % 3 == 0 && i % 5 == 0 ? arr.push("FizzBuzz") : i % 3 == 0 ? arr.push("Fizz") : i % 5 == 0 ? arr.push("Buzz") : arr.push(i)
    return arr
}

console.log(fizzbuzz(30))
