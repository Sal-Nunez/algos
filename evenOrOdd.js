// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
    // even_or_odd(2) even
    // even_or_odd(7) odd
    // even_or_odd(-42) even
    // even_or_odd(-7)odd
    // even_or_odd(0)even

    const even_or_odd = num => num % 2 === 0 ? 'Even' : 'Odd'

    console.log(even_or_odd(3))

    