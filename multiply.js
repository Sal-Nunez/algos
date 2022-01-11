// add single digits in any number

const myFunction = (num) => {
    num = num.toString()
    sum = 0
    for (let i = 0; i < num.length; i++) sum += parseInt(num[i])
    return sum
}

console.log(myFunction(1234))