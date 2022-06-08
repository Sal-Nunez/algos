const romanToInt = (s) => {
    let i = 0;
    let answer = 0
    const romanNumerals = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    while (i < s.length) {
        if(romanNumerals[s[i]] < romanNumerals[s[i+1]]) {
            answer += (romanNumerals[s[i+1]] - romanNumerals[s[i]])
            i+=2
        } else {
            answer += (romanNumerals[s[i]])
            i++
        }
    }
    return answer
}

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))