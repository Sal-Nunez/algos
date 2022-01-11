function solution(str) {
    let answer = [];
    if (str.length == 0) {
        return answer;
    }
    if (str.length == 1) {
        answer.push(str + "_")
        return answer
    }
    if (str.length < 3) {
        answer.push(str);
        return answer;
    }
    let subString = "";
    for (let i = 0; i < str.length; i++) {
        subString += str[i]
        if (i == str.length - 1) {
            if (subString.length == 1) {
                subString += "_"
            }
            answer.push(subString)
        }
        if (i % 2 == 1 && i != str.length - 1) {
            answer.push(subString)
            subString = ""
        }
    }
    return answer;
}


function solution(str) {
    var i = 0;
    var result = new Array();
    if (str.length % 2 !== 0) {
        str = str + '_';
    }
    while (i < str.length) {
        result.push(str[i] + str[i + 1]);
        i += 2;
    }
    return result;
}

function solution(s) {
    return (s + "_").match(/.{2}/g) || []
}

function solution(str) {
    arr = [];
    for (var i = 0; i < str.length; i += 2) {
        second = str[i + 1] || '_';
        arr.push(str[i] + second);
    }
    return arr;
}