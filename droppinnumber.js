function solution(passcode, attempts) {
    if(attempts.length < 1) return false
    let counter = 0
    for(let i = 0; i < attempts.length; i++)
    {
        attempts[i] === passcode ? counter = 0 : counter++
        if(counter === 10) return true
    }
    return false
}

console.log(solution("1234", ["5819", "8952", "5885", "6550", "2697", "5489", "0064", "5240", "5082", "9438", "7589", "2071", "0472", "2762", "7754", "6515", "4867", "6810"]))
console.log(solution("1234", ["9999", "9999", "9999", "9999", "9999", "9999", "9999", "1234", "9999", "9999", "9999", "9999"]))
console.log(solution("1111", ["1111", "1111", "1111", "1111", "1111", "1111", "1111", "1111", "1111", "1111", "1111", "1111"]))