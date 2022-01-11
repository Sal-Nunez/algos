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
