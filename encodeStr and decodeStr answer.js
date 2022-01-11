function encode(str) {
    if(str.length == 0){
        return str
    }
    let count = 0;
    let newStr = str[0];
    for(let char of str) {
        if (newStr[newStr.length-1] !== char) {
            newStr += count+char;
            count = 0;
        }
        count++;
    }
    newStr += count;
    return newStr.length < str.length ? newStr : str;
}
console.log((encode("aaaaaaaaaacccbbbbbbbbbbbbbbbbbbbb")));

function decode(str){
    let decoded = "";
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        let numStr = "";
        while(!isNaN(str[i+1])){
            numStr += str[++i];
        }
        decoded += char.repeat(parseInt(numStr));
    }
    return decoded;
}
console.log(decode("a5c3b12"));