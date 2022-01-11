// It's 9 time!

// I want to count from 1 to n. How many times will I use a '9'?

// 9, 19, 91.. will contribute one '9' each, 99, 199, 919.. wil contribute two '9's each...etc

// Note: n will always be a positive integer.

// number9(8) //should return 0
// number9(9) //should return 1
// number9(10) //should return 1
// number9(98) //should return 18
// number9(100) //should return 20

// return the number of 9's used to count out 1 to n
function number9(n, num = n, count = 0, n2 = n) {
    // let total = 0
    let str = (n.toString().length - 1) * (parseInt(n.toString()[0])) + ''
    let round = 10 + ''
    for (let i = 0; i < n.toString().length - 2; i++) {
        str += 0
        round += 0
    }

    count += parseInt(str)
    //     console.log("in else", n)
    if(n.toString()[0] === '9'){
        let amount = '9'
        for(let i = 0; i < n.toString().length - 2; i++ ) {
            amount += 0
        }
        console.log('in if', amount)
    }
    console.log(n)
    n -= Math.floor(n/round) * round
    console.log(n)
    // console.log(count)
    // console.log(Math.floor(n / round) * round)
    if(num < 100) {
        let round = 10 + ''
        for (let i = 0; i < num.toString().length - 2; i++) {
            round += 0
        }
        for (let i = (Math.floor(n2 / round) * round); i <= n2; i++) {
            // console.log(i)
            if (i.toString().includes('9')) {
                count += i.toString().match(/9/g).length
            }
        }
        return count
    }
    num = parseInt(num.toString().substring(1))
    return number9(n, num, count, n2)
    // total += Math.floor(n/round) * round
}
    // console.log(Math.floor(25433/10000) * 10000)

    console.log(number9(99999))


// Test.assertEquals(number9(1), 0, 'Nein!') 
// Test.assertEquals(number9(9), 1, 'Nein!')
// Test.assertEquals(number9(100), 20, 'Nein!')
// Test.assertEquals(number9(565754),275645, 'Nein!')
// Test.assertEquals(number9(10000000000),10000000000, 'Nein!')